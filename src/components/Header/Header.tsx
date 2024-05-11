import styled from 'styled-components';
import logo from '../../assets/logo.webp';

interface HeaderProps {
  isStartPage: boolean;
}

const Header = ({ isStartPage }: HeaderProps) => {
  return (
    <H1>
      <LogoImg className="logo" src={logo} alt="페이지 메인 로고" isStartPage={isStartPage} />
    </H1>
  );
};

export default Header;

const H1 = styled.h1`
  text-align: center;
`;

const LogoImg = styled.img<{ isStartPage: boolean }>`
  ${({ isStartPage }) =>
    isStartPage
      ? `width: 410px;
          max-width: calc(100% - (80px * 2));
          padding-top: 20px;

          @media (max-width: 767px) {
            padding: 30px 0px 20px 0px;
          }
          `
      : ` width: 386px;
            max-width: calc(100% - (97px * 2));
          `}
`;
