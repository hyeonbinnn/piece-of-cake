import Header from '../../components/Header/Header';
import LoginForm from '../../components/Login/LoginForm';

const StartPage = () => {
  return (
    <>
      <Header isStartPage={true} />
      <LoginForm />
    </>
  );
};

export default StartPage;
