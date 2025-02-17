import { render, screen } from "@testing-library/react";
import NavHead from "../AComponent/NavHead";
import Footer from "../AComponent/Footer";

//
describe("Header test", () => {
  test("renders NavHead page", () => {
    render(<NavHead />);
    expect(screen.getByText(/Head data/i)).toBeInTheDocument();
  });
});

describe("Footer test", () => {
  test("Test footer component", () => {
    render(<Footer />);
    expect(screen.getByText(/Conditions/i)).toBeInTheDocument();
  });
});
