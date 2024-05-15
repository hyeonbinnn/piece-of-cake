import * as S from './TotalCart.style';
import Wallet from '../Wallet/Wallet';
import ManualModal from '../Modal/ManualModal';
import useModal from '../../hooks/useModal';
import { balanceState, SelectedCakeItem, totalCartItemState } from '../../state/atoms/atoms';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { totalPriceAmountSelector, totalPriceSelector } from '../../state/selectors/selector';

const TotalCart = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [cartItem, setCartItem] = useRecoilState(totalCartItemState);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const totalPriceBalance = useRecoilValue(totalPriceAmountSelector);
  const setBalance = useSetRecoilState(balanceState);

  const cartItemRefresh = (): void => {
    // 1. 새로고침 버튼을 누르면 장바구니 초기화
    // 2. 잔액 === 총금액 + 잔액
    setCartItem([]);
    setBalance(totalPriceBalance);
  };
  return (
    <>
      <Wallet />
      <S.Wrapper>
        <S.H2>장바구니</S.H2>
        <S.GetCartUl>
          {cartItem.map((item: SelectedCakeItem) => (
            <S.GetCartLi>
              <S.GetCartImg src={item.img} alt={item.name} />
              <S.GetCartName>{item.name}</S.GetCartName>
              <S.GetCartStrong>{item.quantity}</S.GetCartStrong>
            </S.GetCartLi>
          ))}
        </S.GetCartUl>
        <S.BottomBox>
          <S.ButtonBox>
            <S.ManualBtn onClick={openModal}>설명서</S.ManualBtn>
            <S.RefreshBtn onClick={cartItemRefresh} />
          </S.ButtonBox>
          <S.TotalPrice>총금액 : {totalPrice.toLocaleString()}원</S.TotalPrice>
        </S.BottomBox>
      </S.Wrapper>
      {isModalOpen && <ManualModal onClose={closeModal} />}
    </>
  );
};

export default TotalCart;
