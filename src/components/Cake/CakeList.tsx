import cakeItem from '../../data/cakeItem';
import { CakeItemData } from '../../types/data';
import * as S from './CakeList.style';

const CakeList = () => {
  return (
    <S.Wrapper>
      <S.H2 className="a11y-hidden">판매 케이크</S.H2>
      <S.CakeUl>
        {cakeItem.map((item: CakeItemData) => (
          <S.CakeLi key={item.id}>
            <S.CakeBtn type="button">
              <S.CakeImg src={item.img} alt={item.name} />
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
