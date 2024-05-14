import styled from 'styled-components';
import error404 from '../../assets/error.webp';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <H2>
        <Img src={error404} />
      </H2>
      <P>죄송합니다. 현재 페이지를 찾을 수 없습니다.</P>
      <Span>
        페이지의 주소가 잘못 입력되었거나,
        <br />
        주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
      </Span>
      <ButtonBox>
        <PrevBtn onClick={goBack}>이전 페이지</PrevBtn>
        <Link to="/">
          <StartBtn>시작 페이지</StartBtn>
        </Link>
      </ButtonBox>
    </Wrapper>
  );
};

export default ErrorPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const H2 = styled.h2`
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 650px;
  height: auto;
`;

const P = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
`;

const Span = styled.span`
  display: block;
  text-align: center;
  line-height: 1.5;
  font-size: 16px;
  margin-bottom: 30px;
`;

const ButtonBox = styled.div`
  button {
    width: 150px;
    height: 45px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 5px;
  }
`;

const PrevBtn = styled.button`
  background-color: var(--main-bg);
  border: 2px solid var(--button);
  margin-right: 10px;
`;
const StartBtn = styled.button`
  background-color: var(--button);
  color: var(--sub-color);
`;
