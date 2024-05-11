import styled from 'styled-components';

export const Main = styled.main``;

export const Wrapper = styled.div`
  width: 480px;
  max-width: calc(100% - (70px * 2));
  margin: 0 auto;
  padding: 30px 0px;

  button {
    font-weight: bold;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  height: 30px;
  padding: 7px 10px;
  border: 1.5px solid var(--border);
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
    color: var(--box);
  }

  &:focus {
    border: 2px solid var(--box);
    outline: none;
  }

  &:first-of-type {
    margin-bottom: 8px;
  }
`;

export const StartBtn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin: 20px 0px 10px 0px;
  font-size: 15px;
`;

export const BottomBox = styled.div`
  float: right;
  position: relative;

  button {
    font-size: 14px;
    color: var(--button);
  }
`;

export const SignUpBtn = styled.button`
  margin-right: 10px;
  &::after {
    content: '|';
    position: absolute;
    top: 2px;
    margin-left: 10px;
    color: var(--box);
  }
`;

export const FindBtn = styled.button``;
