import { Snippet } from "../Snippet";
import { screen, render } from "@testing-library/react";

describe("<Snippet>", () => {
  const description = "My description";
  const header = "My header";
  const content = `console.log(15)`;

  it("throws an error when required props missing", () => {
    expect(() => render(<Snippet />)).toThrow();
  });

  it("renders description, header and content if given", () => {
    render(
      <Snippet
        header={<div>{header}</div>}
        description={<div>{description}</div>}
      >
        {content}
      </Snippet>
    );

    screen.getByText(description);
    screen.getByText(header);
    screen.getByText(/console/);
    screen.getByText(/log/);
    screen.getByText(/15/);
  });
});
