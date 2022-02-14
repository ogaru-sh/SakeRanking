import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SakeRanking } from '@/components/pages/SakeRanking';
import {} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SakeRanking />} />
        <Route path="/favorite" element={<SakeRanking />} />
      </Routes>
    </BrowserRouter>
  );
};
export { App };
