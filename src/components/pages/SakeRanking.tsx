import { Suspense } from 'react';
import { ResponsiveDrawer } from '@/components/templates/ResponsiveDrawer';
import { SakeImageList } from '@/components/templates/SakeList';

export const SakeRanking = () => {
  return (
    <ResponsiveDrawer>
      <Suspense fallback={<div>Loading...</div>}>
        <SakeImageList />
      </Suspense>
    </ResponsiveDrawer>
  );
};
