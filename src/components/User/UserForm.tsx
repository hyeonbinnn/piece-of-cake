import * as S from './UserForm.style';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { usernameState } from '../../state/atoms/atoms';
import useModal from '../../hooks/useModal';
import WelcomeModal from '../Modal/WelcomeModal';

type FormData = {
  username: string;
};

const UserForm = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const setUsername = useSetRecoilState(usernameState);
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = (data: FormData) => {
    localStorage.setItem('username', data.username);
    setUsername(data.username);
    openModal();
  };

  return (
    <>
      <S.Main>
        <S.Wrapper>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Label htmlFor="username" className="a11y-hidden">
              닉네임
            </S.Label>
            <S.Input
              id="username"
              type="text"
              placeholder="닉네임"
              aria-invalid={errors.username ? 'true' : 'false'}
              {...register('username', {
                required: '닉네임은 필수 입력입니다.',
                maxLength: {
                  value: 3,
                  message: '닉네임은 3자리 이하로 입력해주세요.',
                },
              })}
              autoFocus
            />
            {errors.username && <S.Error role="alert">{errors.username.message}</S.Error>}

            <S.StartBtn type="submit" disabled={isSubmitting} className="get-btn">
              입장
            </S.StartBtn>
          </S.Form>
        </S.Wrapper>
      </S.Main>
      {isModalOpen && <WelcomeModal onClose={closeModal} />}
    </>
  );
};

export default UserForm;
