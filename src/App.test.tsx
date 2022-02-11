import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './components/page/Top/App';

describe('Simple working test', () => {
  test('should render correctly', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // extend-expectのmatcher[toBeInTheDocument]
  test('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
  });

  // jest-extendedのmatcher[toBeEmptyDOMElement]
  test('should increment count on click', async () => {
    render(<App />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is:/i)).not.toBeEmptyDOMElement();
  });
});
