import styled from 'styled-components';
import { CartUl, CartLi, CartItemImg, CartItemName, CartItemStrong } from './SpareCart.style';
import { CommonBtn } from '../Button/ClickButton';

export const Wrapper = styled.div``;

export const H2 = styled.h2`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 13px;
`;

export const GetCartUl = styled(CartUl)`
  min-height: 400px;
`;

export const GetCartLi = styled(CartLi)``;

export const GetCartImg = styled(CartItemImg)``;

export const GetCartName = styled(CartItemName)``;

export const GetCartStrong = styled(CartItemStrong)``;

export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  margin-top: 15px;
`;

export const ManualBtn = styled(CommonBtn)`
  width: 80px;
  height: 25px;
`;

export const TotalPrice = styled.p``;
