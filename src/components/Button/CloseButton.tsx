import styled from 'styled-components';
import close from '../../assets/close.svg';
import { OnCloseProps } from '../../types/data';

const CloseButton = ({ onClose }: OnCloseProps) => {
  return (
    <CloseBtn onClick={onClose}>
      <Img src={close} alt="닫기 버튼" />
    </CloseBtn>
  );
};

export default CloseButton;

export const CloseBtn = styled.button`
  position: absolute;
  top: 17px;
  right: 15px;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;
