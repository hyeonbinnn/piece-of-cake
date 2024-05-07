import * as S from './SpareCart.style';
import Button from '../Button/Button';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { amountState, balanceState } from '../../state/atoms/atoms';
import { totalAmountState } from './../../state/selectors/selector';

const SpareCart = () => {
  const totalAmount = useRecoilValue(totalAmountState);
  const [amount, setAmount] = useRecoilState(amountState);
  const [balance, setBalance] = useRecoilState(balanceState);
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue2 = e.target.value;
    setInputValue2(newValue2);
  };

  const handleDeposit = (): void => {
    // 1. 입금액이 소지금보다 많으면 경고장 출력
    // 2. 입금액이 정상적으로 입금되면 입금창은 초기화
    // 3. 잔액 === 기존 잔액 + 입금액
    // 4. 입금 버튼 누르면 소지금 === 소지금 - 입금액

    const inputValueNum2 = parseInt(inputValue2);

    if (amount < inputValueNum2) {
      alert('소지금을 충전해주세요.');
      setInputValue2('');
      return;
    }

    setBalance((prevBalance) => prevBalance + inputValueNum2);
    setAmount((prevAmount) => prevAmount - inputValueNum2);
    setInputValue2('');
  };

  const handleReturn = (): void => {
    // 1. 거스름돈 반환 버튼 누르면 소지금 === 기존 소지금 + 잔액
    // 2. 잔액창 초기화
    if (balance > 0) {
      // setAmount((prevAmount) => prevAmount + balance);
      setAmount(totalAmount);
      setBalance(0);
    }
  };

  return (
    <S.Container>
      <S.BalanceBox className="color-box">
        <S.H2 className="title">잔액</S.H2>
        <S.P>{balance.toLocaleString()}원</S.P>
      </S.BalanceBox>
      <Button text="거스름돈 반환" onClick={handleReturn} />

      <S.Label htmlFor="input-money" className="a11y-hidden">
        금액 투입
      </S.Label>
      <S.InputMoney
        id="input-money"
        min="1000"
        step="1000"
        type="number"
        placeholder="입금액 입력"
        value={inputValue2}
        onChange={handleInputChange2}
      />
      <Button text="입금" onClick={handleDeposit} />

      <S.H2 className="a11y-hidden">예비 장바구니</S.H2>
      <S.CartUl></S.CartUl>
      <Button text="획득" className="get-btn" />
    </S.Container>
  );
};

export default SpareCart;
