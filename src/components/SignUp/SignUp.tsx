import * as S from './SignUp.style';
import { Link } from 'react-router-dom';
import { Main, Form } from '../Login/LoginForm.style';

const SignUp = () => {
  return (
    <Main>
      <S.Wrapper2>
        <Form>
          <S.Label>아이디</S.Label>
          <S.IdBox>
            <S.Input2 type="text" />
            <S.CheckBtn className="get-btn">중복</S.CheckBtn>
          </S.IdBox>
          <S.Label>비밀번호</S.Label>
          <S.Input2 type="password" />
          <S.Label>비밀번호 재확인</S.Label>
          <S.Input2 type="password" />
          <Link to="/">
            <S.SignUpBtn className="get-btn">회원가입</S.SignUpBtn>
          </Link>
        </Form>
      </S.Wrapper2>
    </Main>
  );
};

export default SignUp;
