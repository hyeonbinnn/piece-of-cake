import * as S from './TotalCart.style';
import Wallet from '../Wallet/Wallet';

const TotalCart = () => {
  return (
    <>
      <Wallet />
      <S.Wrapper>
        <S.H2>장바구니</S.H2>
        <S.GetCartUl>
          <S.GetCartLi></S.GetCartLi>
        </S.GetCartUl>
        <S.TotalMoney>총금액 : 원</S.TotalMoney>
      </S.Wrapper>
    </>
  );
};

export default TotalCart;
