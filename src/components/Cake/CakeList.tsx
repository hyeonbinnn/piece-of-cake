import * as S from './CakeList.style';
import { useRecoilState } from 'recoil';
import { CakeItemData } from '../../types/data';
import { balanceState, SelectedCakeItem, selectedItemState } from '../../state/atoms/atoms';

interface CakeListProps {
  cakeItem: CakeItemData[];
}

const CakeList = ({ cakeItem }: CakeListProps) => {
  const [balance, setBalance] = useRecoilState(balanceState);
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);

  const handleClickItem = (item: CakeItemData): void => {
    // 1. item 버튼을 눌렀을 때 해당 item 금액만큼 잔액에서 빠지기
    // 2. 이미 선택된 item인지 확인하고, 맞다면 quantity 증가
    // 3. 선택된 item의 count 재고가 0이면 경고창 출력

    if (item.cost > balance) {
      alert('잔액이 부족합니다.');
      return;
    }

    // 이미 선택된 아이템인지 확인
    const selectedItemIndex = selectedItem.findIndex(
      (selected: SelectedCakeItem) => selected.id === item.id
    );
    const updatedSelectedItem = [...selectedItem];

    // 이미 선택된 아이템일 경우 quantity를 증가
    if (selectedItemIndex !== -1) {
      if (updatedSelectedItem[selectedItemIndex].count > 0) {
        updatedSelectedItem[selectedItemIndex] = {
          ...updatedSelectedItem[selectedItemIndex],
          quantity: updatedSelectedItem[selectedItemIndex].quantity + 1,
          count: updatedSelectedItem[selectedItemIndex].count - 1,
        };
      } else {
        alert('재고가 부족합니다.');
        return;
      }
      setSelectedItem(updatedSelectedItem);
    } else {
      setSelectedItem([...selectedItem, { ...item, quantity: 1, count: item.count - 1 }]);
    }

    setBalance((prevBalance) => prevBalance - item.cost);
  };

  return (
    <S.Wrapper>
      <S.H2 className="a11y-hidden">판매 케이크</S.H2>
      <S.CakeUl>
        {cakeItem.map((item: CakeItemData) => (
          <S.CakeLi key={item.id}>
            <S.CakeBtn type="button" onClick={() => handleClickItem(item)}>
              <S.CakeImg src={item.img} alt={item.name} loading="lazy" />
              <S.CakeName>{item.name}</S.CakeName>
              <S.CakeCost>₩ {item.cost.toLocaleString()}</S.CakeCost>
            </S.CakeBtn>
          </S.CakeLi>
        ))}
      </S.CakeUl>
    </S.Wrapper>
  );
};

export default CakeList;
