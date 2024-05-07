import styled from 'styled-components';

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <CommonBtn type="button" className={className} onClick={onClick}>
      {text}
    </CommonBtn>
  );
};

export default Button;

export const CommonBtn = styled.button`
  box-shadow: 0px 0px 4px var(--box);
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
`;
