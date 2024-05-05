import Button from '../Button/Button';
import * as S from './Wallet.style';
import { Label, InputMoney } from '../Cart/SpareCart.style';

const Wallet = () => {
  return (
    <S.Wrapper>
      <S.CashBox className="color-box">
        <S.H2 className="title">소지금</S.H2>
        <S.P></S.P>
      </S.CashBox>
      <S.InputBox>
        <Label htmlFor="input-money" className="a11y-hidden">
          금액 투입
        </Label>
        <InputMoney
          id="input-money"
          min="1000"
          step="1000"
          type="number"
          placeholder="충전액 입력"
        />
        <Button text="충천" />
      </S.InputBox>
    </S.Wrapper>
  );
};

export default Wallet;
