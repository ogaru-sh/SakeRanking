import { Routes, Route } from 'react-router-dom';
import { SakeRanking } from '@/components/pages/SakeRanking';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SakeRanking />} />
      <Route path="/ranking" element={<SakeRanking />} />
    </Routes>
  );
};
export { App };
