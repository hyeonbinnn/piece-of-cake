import { atom } from 'recoil';

export const amountState = atom<number>({
  key: 'amountState',
  default: 0,
});

export const balanceState = atom<number>({
  key: 'balanceState',
  default: 0,
});
