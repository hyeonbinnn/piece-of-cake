import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: var(--section);
  border: 10px solid var(--border);
  border-radius: 5px;
  width: 80%;
  max-width: 800px;
  height: auto;
  padding: 40px;
  position: relative;

  @media (max-width: 767px) {
    padding: 40px 30px;
  }
`;

export const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;

export const ManualUl = styled.ul`
  line-height: 1.2;
`;

export const ManualLi = styled.li`
  margin-bottom: 8px;
  font-size: 15px;
  text-align: center;

  &:last-child {
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0px 0px 0px;
    text-align: center;
  }

  @media (max-width: 767px) {
    text-align: left;
  }
`;
