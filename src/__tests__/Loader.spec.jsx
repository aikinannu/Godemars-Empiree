import { render } from "@testing-library/react";
import Loader from "../components/Loader";

test("renders loading spinner", () => {
  const { container } = render(<Loader />);
  expect(container.querySelector(".animate-spin")).toBeInTheDocument();
});
