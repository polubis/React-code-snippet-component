import { defaultProps } from "prism-react-renderer";
import type { PrismTheme, DefaultProps } from "prism-react-renderer";

const theme: PrismTheme = {
  // Text color and background.
  plain: { color: "#fff", backgroundColor: "#282a36" },
  styles: [
    {
      // Comments style.
      types: ["comment"],
      style: { color: "rgb(99, 119, 119)", fontStyle: "italic" }
    }
    // Here go the overwritten style...
  ]
};

// Overwritten default props.
export const snippetDefaultProps: DefaultProps = {
  ...defaultProps,
  theme
};
