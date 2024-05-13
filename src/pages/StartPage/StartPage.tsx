import Header from '../../components/Header/Header';
import UserForm from '../../components/User/UserForm';

const StartPage = () => {
  return (
    <>
      <Header isStartPage={true} />
      <UserForm />
    </>
  );
};

export default StartPage;
