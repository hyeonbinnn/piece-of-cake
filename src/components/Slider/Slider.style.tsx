import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
`;

export const PrevBtn = styled(Button)`
  left: -39px;
`;

export const NextBtn = styled(Button)`
  right: -39px;
  transform: scaleX(-1);
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
`;
