import { render, screen, fireEvent } from "@testing-library/react";
import Hub from "../components/Hub";

const mockDivisions = [
  { id: "tech", label: "Technology & Innovation", color: "bg-blue-500" },
  { id: "design", label: "Creative Design", color: "bg-pink-500" },
];

test("renders all divisions and handles clicks", () => {
  const mockSelect = vi.fn();
  render(<Hub divisions={mockDivisions} onSelect={mockSelect} />);

  mockDivisions.forEach((division) => {
    expect(screen.getByText(division.label)).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText(mockDivisions[0].label));
  expect(mockSelect).toHaveBeenCalledWith(mockDivisions[0]);
});
