import type { PrismTheme, DefaultProps } from "prism-react-renderer";

import { defaultProps } from "prism-react-renderer";

const defaultCodeTheme: PrismTheme = {
  // Color of text and background.
  plain: { color: "#fff", backgroundColor: "#282a36" },
  styles: [
    {
      types: ["changed"],
      style: { color: "rgb(162, 191, 252)", fontStyle: "italic" }
    },
    {
      types: ["deleted"],
      style: { color: "rgba(239, 83, 80, 0.56)", fontStyle: "italic" }
    },
    {
      types: ["inserted", "attr-name"],
      style: { color: "rgb(173, 219, 103)", fontStyle: "italic" }
    },
    {
      // Styles for the appearance of comments.
      types: ["comment"],
      style: { color: "rgb(99, 119, 119)", fontStyle: "italic" }
    },
    { types: ["string", "url"], style: { color: "rgb(173, 219, 103)" } },
    { types: ["variable"], style: { color: "rgb(214, 222, 235)" } },
    { types: ["number"], style: { color: "rgb(247, 140, 108)" } },
    {
      types: ["builtin", "char", "constant", "function"],
      style: { color: "rgb(130, 170, 255)" }
    },
    { types: ["punctuation"], style: { color: "rgb(199, 146, 234)" } },
    {
      types: ["selector", "doctype"],
      style: { color: "rgb(199, 146, 234)", fontStyle: "italic" }
    },
    { types: ["class-name"], style: { color: "rgb(255, 203, 139)" } },
    {
      types: ["tag", "operator", "keyword"],
      style: { color: "rgb(127, 219, 202)" }
    },
    { types: ["boolean"], style: { color: "rgb(255, 88, 116)" } },
    { types: ["property"], style: { color: "rgb(128, 203, 196)" } },
    { types: ["namespace"], style: { color: "rgb(178, 204, 214)" } }
  ]
};

// Overriding default properties.
const defaultCodeProps: DefaultProps = {
  ...defaultProps,
  theme: defaultCodeTheme
};

export { defaultCodeProps, defaultCodeTheme };
