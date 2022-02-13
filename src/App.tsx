import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SakeRanking } from '@/components/pages/SakeRanking';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SakeRanking />} />
      </Routes>
    </BrowserRouter>
  );
};
export { App };
