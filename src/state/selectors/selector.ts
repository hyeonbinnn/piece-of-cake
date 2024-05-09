import { selector } from 'recoil';
import { amountState, balanceState } from '../atoms/atoms';

// 소지금 + 잔액
export const totalAmountState = selector<number>({
  key: 'totalAmountState',
  get: ({ get }): number => {
    const amount = get(amountState);
    const balance = get(balanceState);
    return amount + balance;
  },
});
