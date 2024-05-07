import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { amountState } from '../../state/atoms/atoms';
import { Label, InputMoney } from '../Cart/SpareCart.style';
import * as S from './Wallet.style';
import Button from '../Button/Button';

const Wallet = () => {
  const [amount, setAmount] = useRecoilState(amountState);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleRecharge = (): void => {
    const inputValueNum = parseInt(inputValue);
    if (!isNaN(inputValueNum)) {
      setAmount((prevAmount) => prevAmount + inputValueNum);
      setInputValue('');
    }
  };

  return (
    <S.Wrapper>
      <S.CashBox className="color-box">
        <S.H2 className="title">소지금</S.H2>
        <S.P>{amount.toLocaleString()}원</S.P>
      </S.CashBox>
      <S.ChargeBox>
        <Label htmlFor="input-money" className="a11y-hidden">
          금액 투입
        </Label>
        <InputMoney
          id="input-money"
          min="1000"
          step="1000"
          type="number"
          placeholder="충전액 입력"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button text="충천" onClick={handleRecharge} />
      </S.ChargeBox>
    </S.Wrapper>
  );
};

export default Wallet;
