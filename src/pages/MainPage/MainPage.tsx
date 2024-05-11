import styled from 'styled-components';
import logo from '../../assets/logo.webp';
import Section from '../../components/Section/Section';

const MainPage = () => {
  return (
    <>
      <H1>
        <LogoImg className="logo" src={logo} alt="페이지 메인 로고" />
      </H1>
      <Section />
    </>
  );
};

export default MainPage;

const H1 = styled.h1`
  text-align: center;
`;

const LogoImg = styled.img`
  width: 386px;
  max-width: calc(100% - (97px * 2));
`;
