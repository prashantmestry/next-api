import { render, screen } from "@testing-library/react";
import Footer from "../__component/Footer";

describe("Footer test 2", () => {
  test("Test footer component", () => {
    render(<Footer />);
    expect(screen.getByText(/Docker/i)).toBeInTheDocument();
  });
});
