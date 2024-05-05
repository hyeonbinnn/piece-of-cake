import styled from 'styled-components';

type ButtonProps = {
  text: string;
  className?: string;
};

const Button = ({ text, className }: ButtonProps) => {
  return (
    <CommonBtn type="button" className={className}>
      {text}
    </CommonBtn>
  );
};

export default Button;

const CommonBtn = styled.button`
  box-shadow: 0px 0px 4px var(--box);
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
`;
