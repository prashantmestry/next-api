import { render, screen } from "@testing-library/react";
import Footer from "../AComponent/Footer";

describe("Footer test 2", () => {
  test("Test footer component", () => {
    render(<Footer />);
    expect(screen.getByText(/Docker/i)).toBeInTheDocument();
  });
});
