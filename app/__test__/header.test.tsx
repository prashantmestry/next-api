import { render, screen } from "@testing-library/react";
import NavHead from "../__component/NavHead";
import Footer from "../__component/Footer";

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
