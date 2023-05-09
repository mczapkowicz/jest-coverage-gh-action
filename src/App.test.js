import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react linksa', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react linka 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn preact/i);
  expect(linkElement).toBeInTheDocument();
});