import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: 47%;
`;

export const PrevBtn = styled(Button)`
  left: -33px;
  transform: scaleX(-1);
`;

export const NextBtn = styled(Button)`
  right: -33px;
`;

export const Img = styled.img`
  width: 21px;
  height: 20px;
`;
