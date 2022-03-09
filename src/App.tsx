import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SakeRanking } from '@/components/pages/SakeRanking';
import { config } from './ts/config';

export const App = () => {
  const { root, favorite } = config.pagePath;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={root} element={<SakeRanking />} />
        <Route path={favorite} element={<SakeRanking />} />
      </Routes>
    </BrowserRouter>
  );
};
