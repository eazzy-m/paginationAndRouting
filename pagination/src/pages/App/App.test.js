import { render, screen } from '@testing-library/react';
import UsersList from "../UsersList/UsersList";

test('renders learn react link', () => {
  render(<UsersList />);
  const linkElement = screen.getByPlaceholderText("...")
  expect(linkElement).toBeInTheDocument();
});

// it("", () => {
//
// })