import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../components/ErrorBoundary";

function ProblematicComponent() {
  throw new Error("Crash!");
}

test("displays fallback UI on error", () => {
  render(
    <ErrorBoundary>
      <ProblematicComponent />
    </ErrorBoundary>
  );

  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});
