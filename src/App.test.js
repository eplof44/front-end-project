import { render, screen } from '@testing-library/react';
import App from './App';


test('renders materials listing page', () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(/Materials/);
  expect(screen.getByRole("table")).toHaveTextContent(/ID/);
  expect(screen.getByRole("table")).toHaveTextContent(/Material Name/);
  expect(screen.getByRole("table")).toHaveTextContent(/Color/);
  expect(screen.getByRole("table")).toHaveTextContent(/Price/);
  expect(screen.getByRole("table")).toHaveTextContent(/Volume/);
  expect(screen.getByRole("table")).toHaveTextContent(/Date Delivered/);
  expect(screen.getByRole("link")).toHaveTextContent(/Add/);
});


