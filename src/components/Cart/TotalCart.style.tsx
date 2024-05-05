import styled from 'styled-components';
import { CartUl, CartLi } from './SpareCart.style';

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

export const TotalMoney = styled.p`
  float: right;
  margin-top: 15px;
`;
