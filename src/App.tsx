import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import StartPage from './pages/StartPage/StartPage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
