import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import { SakeList } from '@/components/organisms/ranking/SakeList';
import { ResponsiveDrawer } from '@/components/organisms/responsiveDrawer/ResponsiveDrawer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('hole component', () => {
  test('display the component correctly', async () => {
    render(
      <RecoilRoot>
        <Router>
          <ResponsiveDrawer>
            <Suspense fallback={<div>Loading...</div>}>
              <SakeList />
            </Suspense>
          </ResponsiveDrawer>
        </Router>
      </RecoilRoot>
    );
    // fixme: vitestのtypesがまだ未対応のためlint error
    expect(screen.getByText('Loading...')).toBeInTheDocument(); // eslint-disable-line
  });
});
