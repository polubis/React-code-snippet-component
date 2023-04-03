import styled from "styled-components";

// Custom styles for Code.tsx component.

const Wrapper = styled.div`
  code[class*="language-"],
  pre[class*="language-"] {
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }
  pre[class*="language-"] {
    padding: 1em;
    overflow: auto;
  }
  :not(pre) > code[class*="language-"],
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 4px;
    white-space: normal;
  }
  .token.bold,
  .token.important {
    font-weight: 700;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  code:focus {
    outline: none;
  }
`;

const Pre = styled.pre`
  text-align: left;
  padding: 0.5em;
  overflow: scroll;
  margin: 0;
  border-radius: 4px;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

const Line = styled.div`
  display: table-row;
`;

const LineNumber = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

export { Wrapper, Pre, Line, LineNumber, LineContent };
