import styled from 'styled-components';
import { Wrapper } from './ManualModal.style';

export const Wrapper2 = styled(Wrapper)`
  width: 60%;
  max-width: 300px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
`;

export const ContentP = styled.p`
  font-size: 17px;
`;

export const Username = styled.span`
  font-size: 25px;
`;

export const GoBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const GoName = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const GoBtn = styled.button``;

export const GoImg = styled.img`
  width: 20px;
  height: 20px;
  transform: rotate(90deg);
`;
