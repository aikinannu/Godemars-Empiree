import { render, screen, fireEvent } from "@testing-library/react";
import DivisionPage from "../components/DivisionPage";

const mockDivision = {
  id: "tech",
  label: "Technology & Innovation",
  tagline: "Innovate, Build, Transform.",
};

test("renders division content and back button works", () => {
  const mockBack = vi.fn();
  render(<DivisionPage division={mockDivision} onBack={mockBack} />);

  expect(screen.getByText(mockDivision.label)).toBeInTheDocument();
  expect(screen.getByText(mockDivision.tagline)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /back/i }));
  expect(mockBack).toHaveBeenCalledTimes(1);
});
