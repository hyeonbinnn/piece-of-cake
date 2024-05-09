import * as S from './TotalCart.style';
import Wallet from '../Wallet/Wallet';
import ManualModal from '../Modal/ManualModal';
import useModal from '../../hooks/useModal';
import { SelectedCakeItem, totalCartItemState } from '../../state/atoms/atoms';
import { useRecoilValue } from 'recoil';

const TotalCart = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const cartItem = useRecoilValue(totalCartItemState);

  const calculateTotalPrice = (): number => {
    return cartItem.reduce(
      (total: number, item: SelectedCakeItem) => total + item.cost * item.quantity,
      0
    );
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
          <S.ManualBtn onClick={openModal}>설명서</S.ManualBtn>
          <S.TotalPrice>총금액 : {calculateTotalPrice().toLocaleString()}원</S.TotalPrice>
        </S.BottomBox>
      </S.Wrapper>
      {isModalOpen && <ManualModal onClose={closeModal} />}
    </>
  );
};

export default TotalCart;
