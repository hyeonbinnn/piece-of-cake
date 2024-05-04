import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto calc((100% - 24px) / 3);
  grid-template-rows: 32px 32px 106px;
  gap: 12px;
  margin-top: 20px;
`;

export const BalanceBox = styled.div`
  background: var(--sub-bg);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
`;

export const H2 = styled.h2``;

export const P = styled.p``;

export const Label = styled.label``;

export const InputMoney = styled.input`
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 0 6px;
  font-size: 13px;

  &:focus {
    border: 2px solid var(--box);
    outline: none;
  }

  &::placeholder {
    color: var(--box);
  }
`;

export const CartUl = styled.ul`
  background: var(--sub-bg);
  border-radius: 5px;
  border: 1px solid var(--border);
  overflow-y: auto;
  padding: 12px;
`;
