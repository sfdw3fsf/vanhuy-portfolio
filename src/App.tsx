import { Route, Routes } from 'react-router';
import './App.css';
import PageContainer from './layout/PageContainer';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PageContainer />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
