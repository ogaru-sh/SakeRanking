import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import { SakeImageList } from '../components/organisms/ranking/SakeList';
import { ResponsiveDrawer } from '../components/templates/ResponsiveDrawer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('hole component', () => {
  test('display the component correctly', async () => {
    render(
      <RecoilRoot>
        <Router>
          <ResponsiveDrawer>
            <Suspense fallback={<div>Loading...</div>}>
              <SakeImageList />
            </Suspense>
          </ResponsiveDrawer>
        </Router>
      </RecoilRoot>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
