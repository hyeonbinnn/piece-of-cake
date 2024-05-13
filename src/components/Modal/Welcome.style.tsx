import styled from 'styled-components';
import { Wrapper } from './ManualModal.style';

export const Wrapper2 = styled(Wrapper)`
  width: 70%;
  max-width: 500px;
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const WelcomeImg = styled.img`
  width: 400px;
  max-width: calc(100% - (10px * 2));
  height: auto;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0 15px;
`;

export const ContentP = styled.p`
  font-size: 16px;
`;

export const Username = styled.span`
  font-size: 20px;
`;

export const GoBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const GoName = styled.span`
  font-weight: bold;
  font-size: 17px;
`;

export const GoBtn = styled.button``;

export const GoImg = styled.img`
  width: 20px;
  height: 20px;
  transform: rotate(90deg);
`;
