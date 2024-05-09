import { atom } from 'recoil';
import { CakeItemData } from '../../types/data';

export interface SelectedCakeItem extends CakeItemData {
  quantity: number;
}

// 소지금
export const amountState = atom<number>({
  key: 'amountState',
  default: 0,
});

// 잔액
export const balanceState = atom<number>({
  key: 'balanceState',
  default: 0,
});

// 선택한 아이템
export const selectedItemState = atom<SelectedCakeItem[]>({
  key: 'selectedItemState',
  default: [],
});

// 최종 장바구니
export const totalCartItemState = atom<SelectedCakeItem[]>({
  key: 'totalCartItemState',
  default: [],
});
