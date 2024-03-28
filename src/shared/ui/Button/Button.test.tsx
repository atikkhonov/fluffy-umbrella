import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
  test("Testing render", () => {
    render(<Button>Some text</Button>);
    expect(screen.getByText("Some text")).toBeInTheDocument();
  });

  test("Testing clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>Some text</Button>);
    expect(screen.getByText("Some text")).toHaveClass("clear");
  });
});
