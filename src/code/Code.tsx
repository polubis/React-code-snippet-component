import { memo } from "react";
import PrismCode from "prism-react-renderer";
import { defaultCodeProps } from "./setup";
import { Pre, Line, LineContent, LineNumber, Wrapper } from "./style";
import type { CodeProps } from "./models";

const Code = memo(
  // Memo used to boost performance.
  ({ children, language = "jsx" }: CodeProps) => {
    return (
      <Wrapper className="ui-code">
        <PrismCode
          {...defaultCodeProps}
          // Removes excessive spaces and tabs.
          code={children.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={`${className} ui-code-pre`} style={style}>
              {tokens.map((line, i) => (
                // Tokens are mapped to lines of code.
                // {...getLineProps} injects props from <PrismCode> component.
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNumber>{i + 1}</LineNumber>
                  <LineContent>
                    {line.map((token, key) => (
                      // {...getTokenProps} injects props from <PrismCode> component.
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          )}
        </PrismCode>
      </Wrapper>
    );
  },
  // Blocks rerender when values are the same.
  (prev, curr) => prev.children === curr.children
);

export type { CodeProps };

export { Code };
