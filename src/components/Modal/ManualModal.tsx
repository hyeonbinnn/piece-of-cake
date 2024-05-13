import * as S from './ManualModal.style';
import { OnCloseProps } from '../../types/data';
import CloseButton from '../Button/CloseButton';

const ManualModal = ({ onClose }: OnCloseProps) => {
  const descList: string[] = [
    '충천액을 입력 후, 충전 버튼을 누르면 소지금이 나타납니다.',
    '소지금 이하의 금액을 입금액에 입력 후, 입금 버튼을 누르면 잔액이 채워집니다.',
    '소지금에서 잔액이 차감되고, 원하는 디저트를 잔액 이하로 고를 수 있습니다.',
    '잔액이 남으면, 거스름돈 반환 버튼을 눌러 소지금을 다시 채울 수 있습니다.',
    '획득 버튼을 누르면 장바구니에 선택한 디저트와 금액을 최종적으로 확인할 수 있습니다.',
    '준비 끝! 이제 Piece of Cake 벤딩머신을 즐겨주세요!',
    '- 매일이 당신의 생일이길 바라는 주인장 👧🏻 올림  -',
  ];

  return (
    <S.Container>
      <S.Wrapper>
        <S.H2>🍰 Piece of Cake 이용 방법</S.H2>
        <CloseButton onClose={onClose} />
        <S.ManualUl>
          {descList.map((desc: string, index: number) => (
            <S.ManualLi key={index}>
              {index !== descList.length - 1 ? `${index + 1}.` : ''} {desc}
            </S.ManualLi>
          ))}
        </S.ManualUl>
      </S.Wrapper>
    </S.Container>
  );
};

export default ManualModal;
