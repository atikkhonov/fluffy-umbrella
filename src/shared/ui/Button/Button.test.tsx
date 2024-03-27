import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("test", () => {
    render(<Button>123</Button>);
    expect(screen.getByText("123")).toBeInTheDocument();
  });
});
