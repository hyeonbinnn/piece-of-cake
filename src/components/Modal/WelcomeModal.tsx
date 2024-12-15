import * as S from './Welcome.style';
import go from '../../assets/go.svg';
import CloseButton from '../Button/CloseButton';
import { OnCloseProps } from '../../types/data';
import { Container } from './ManualModal.style';
import { useNavigate } from 'react-router-dom';
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
        <CloseButton onClose={onClose} />
        <S.ContentBox>
          <S.Username>{username} 님</S.Username>
          <S.UserSpan>환영합니다.</S.UserSpan>
          <S.GoBox onClick={goToMain}>
            <S.GoName>🍰 Piece of Cake</S.GoName>
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
