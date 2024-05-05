import * as S from './SpareCart.style';
import Button from '../Button/Button';

const SpareCart = () => {
  return (
    <S.Container>
      <S.BalanceBox className="color-box">
        <S.H2 className="title">잔액</S.H2>
        <S.P></S.P>
      </S.BalanceBox>
      <Button text="거스름돈 반환" />

      <S.Label htmlFor="input-money" className="a11y-hidden">
        금액 투입
      </S.Label>
      <S.InputMoney
        id="input-money"
        min="1000"
        step="1000"
        type="number"
        placeholder="입금액 입력"
      />
      <Button text="입금" />

      <S.H2 className="a11y-hidden">예비 장바구니</S.H2>
      <S.CartUl></S.CartUl>
      <Button text="획득" className="get-btn" />
    </S.Container>
  );
};

export default SpareCart;
