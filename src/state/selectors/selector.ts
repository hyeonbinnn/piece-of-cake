import { selector } from 'recoil';
import { amountState, balanceState, SelectedCakeItem, totalCartItemState } from '../atoms/atoms';

// 소지금 + 잔액
export const totalAmountSelector = selector<number>({
  key: 'totalAmountSelector',
  get: ({ get }): number => {
    const amount = get(amountState);
    const balance = get(balanceState);
    return amount + balance;
  },
});

// 총금액 계산
export const totalPriceSelector = selector<number>({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const cartItems: SelectedCakeItem[] = get(totalCartItemState);
    return cartItems.reduce(
      (total: number, item: SelectedCakeItem): number => total + item.cost * item.quantity,
      0
    );
  },
});

// 총금액 + 잔액
export const totalPriceAmountSelector = selector<number>({
  key: 'totalPriceAmountSelector',
  get: ({ get }) => {
    const cartItems = get(totalPriceSelector);
    const balance = get(balanceState);
    return cartItems + balance;
  },
});
