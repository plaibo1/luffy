import { render, screen } from '@testing-library/react';
import LuffyApp from './App';


test('renders main div', () => {
  render(<LuffyApp />);
  const div = screen.getByRole(/main/i)
  expect(div).toBeInTheDocument();
});
