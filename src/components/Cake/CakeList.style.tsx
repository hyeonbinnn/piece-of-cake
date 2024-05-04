import styled from 'styled-components';

export const Wrapper = styled.div``;

export const H2 = styled.h2``;

export const CakeUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const CakeLi = styled.li``;

export const CakeBtn = styled.button`
  box-shadow: 0px 0px 4px var(--box);
  border-radius: 10px;
  padding: 11px 10px 9px;
  position: relative;
  width: 100%;

  .active {
    box-shadow: 0 0 0 3px #6327fe;
  }

  img,
  span {
    display: block;
  }
`;

export const CakeImg = styled.img`
  width: 50px;
  height: 50px;
  margin: auto;
`;
export const CakeName = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: var(--main-color);
  margin: 7px 0 5px;
`;
export const CakeCost = styled.span`
  font-size: 13px;
  background: var(--button);
  color: var(--sub-color);
  padding: 5px 0;
  border-radius: 20px;
`;
