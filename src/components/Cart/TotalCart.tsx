import { useState } from 'react';
import * as S from './TotalCart.style';
import Wallet from '../Wallet/Wallet';
import ManualModal from '../Modal/ManualModal';

const TotalCart = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Wallet />
      <S.Wrapper>
        <S.H2>장바구니</S.H2>
        <S.GetCartUl>
          <S.GetCartLi></S.GetCartLi>
        </S.GetCartUl>
        <S.BottomBox>
          <S.ManualBtn onClick={openModal}>설명서</S.ManualBtn>
          <S.TotalMoney>총금액 : 원</S.TotalMoney>
        </S.BottomBox>
      </S.Wrapper>
      {isModalOpen && <ManualModal onClose={closeModal} />}
    </>
  );
};

export default TotalCart;
