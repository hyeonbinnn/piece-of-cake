import styled from 'styled-components';
import { Wrapper, Input, StartBtn } from '../Login/LoginForm.style';

export const Wrapper2 = styled(Wrapper)`
  padding: 20px 0px;
`;

export const IdBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const CheckBtn = styled.button`
  width: 60px;
  height: 45px;
  border-radius: 5px;
  font-size: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: var(--button);
  margin-bottom: 10px;

  &:nth-child(n + 2) {
    margin-top: 15px;
  }
`;

export const Input2 = styled(Input)`
  &:first-of-type {
    margin-bottom: 0px;
  }

  &:nth-child(1) {
    width: 100%;
  }
`;

export const SignUpBtn = styled(StartBtn)`
  margin: 30px 0px 10px 0px;
`;
