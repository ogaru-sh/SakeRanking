import { AppContainer } from '@/components/organisms/appContainer/AppContainer';
import { SakeList } from '@/components/organisms/ranking/SakeList';
import { Suspense } from 'react';

export const SakeRanking = () => {
  return (
    <AppContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <SakeList />
      </Suspense>
    </AppContainer>
  );
};
