import { ResponsiveDrawer } from '@/components/organisms/responsiveDrawer/ResponsiveDrawer';
import { SakeList } from '@/components/organisms/ranking/SakeList';
import { Suspense } from 'react';

export const SakeRanking = () => {
  return (
    <ResponsiveDrawer>
      <Suspense fallback={<div>Loading...</div>}>
        <SakeList />
      </Suspense>
    </ResponsiveDrawer>
  );
};
