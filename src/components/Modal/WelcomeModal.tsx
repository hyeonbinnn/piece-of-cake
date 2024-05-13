import * as S from './Welcome.style';
import go from '../../assets/go.svg';
import welcome from '../../assets/welcome.webp';
import { OnCloseProps } from '../../types/data';
import { Container } from './ManualModal.style';
import { useNavigate } from 'react-router-dom';
import CloseButton from '../Button/CloseButton';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../../state/atoms/atoms';

const WelcomeModal = ({ onClose }: OnCloseProps) => {
  const navigate = useNavigate();
  const username = useRecoilValue(usernameState);

  const goToMain = () => {
    navigate('/main');
  };
  return (
    <Container>
      <S.Wrapper2>
        <S.H2>
          <S.WelcomeImg src={welcome} alt="환영 아이콘" />
        </S.H2>
        <CloseButton onClose={onClose} />
        <S.ContentBox>
          <S.ContentP>
            <S.Username>{username}님</S.Username> 환영합니다.
          </S.ContentP>
          <S.GoBox onClick={goToMain}>
            <S.GoName>🍰 Piece of Cake 바로가기</S.GoName>
            <S.GoBtn>
              <S.GoImg src={go} alt="메인 페이지 이동 아이콘" />
            </S.GoBtn>
          </S.GoBox>
        </S.ContentBox>
      </S.Wrapper2>
    </Container>
  );
};

export default WelcomeModal;
