import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const emailUsLink = screen.getByText(/Email Us/i);
  expect(emailUsLink).toBeInTheDocument();
});
