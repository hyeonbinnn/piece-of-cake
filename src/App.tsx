import { RecoilRoot } from 'recoil';
import logo from './assets/logo.webp';
import GlobalStyle from './styles/GlobalStyle';
import Section from './components/Section/Section';
import styled from 'styled-components';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <H1>
        <LogoImg className="logo" src={logo} alt="페이지 메인 로고" />
      </H1>
      <Section />
    </RecoilRoot>
  );
}

export default App;

const H1 = styled.h1`
  text-align: center;
`;

const LogoImg = styled.img`
  width: 386px;
  max-width: calc(100% - (97px * 2));
`;
