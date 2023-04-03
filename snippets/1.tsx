import PrismSnippet, { defaultProps } from "prism-react-renderer";

const UsageOfPrism = () => {
  return (
    <PrismSnippet
      {...defaultProps}
      code={`import React from 'react'`}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>{/* JSX code goes here... */}</>
      )}
    </PrismSnippet>
  );
};
