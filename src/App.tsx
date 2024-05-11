import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import StartPage from './pages/StartPage/StartPage';
import JoinPage from './pages/JoinPage/JoinPage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
