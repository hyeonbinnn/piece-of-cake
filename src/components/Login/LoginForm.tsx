import * as S from './LoginForm.style';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <S.Main>
      <S.Wrapper>
        <S.Form>
          <S.Label className="a11y-hidden">아이디</S.Label>
          <S.Input type="text" placeholder="아이디" />
          <S.Label className="a11y-hidden">비밀번호</S.Label>
          <S.Input type="password" placeholder="비밀번호" />
          <Link to="/main">
            <S.StartBtn className="get-btn">입장</S.StartBtn>
          </Link>
        </S.Form>
        <S.BottomBox>
          <Link to="/join">
            <S.SignUpBtn>회원가입</S.SignUpBtn>
          </Link>
          <S.FindBtn>아이디 / 비밀번호 찾기</S.FindBtn>
        </S.BottomBox>
      </S.Wrapper>
    </S.Main>
  );
};

export default LoginForm;
