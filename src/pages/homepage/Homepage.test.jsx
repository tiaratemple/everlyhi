import { render, screen } from "@testing-library/react";
import HomePage from "../homepage/Homepage";

describe("homepage ui tests", () => {
  it("homepage renders correctly", () => {
    //Arrange
    render(<HomePage />);
  });
});
