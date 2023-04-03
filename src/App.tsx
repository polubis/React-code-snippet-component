import { useEffect, useState } from "react";
import { Snippet } from "./snippet";
import type { SnippetProps } from "./snippet";
import "./styles.css";

const titles = ["Dynamic snippet", "Static snippet", "Error snippet"];

const props: SnippetProps[] = [
  {
    src:
      "https://raw.githubusercontent.com/polubis/React-code-snippet-component/main/src/code/setup.ts",
    linesCount: 55
  },
  {
    children: `import React from 'react'`
  },
  {
    src:
      "https://raw.githubusercontent.cReact-code-snippet-component/main/src/code/setup.ts",
    linesCount: 55
  }
];

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setCounter((value) => {
        const next = value + 1;
        return next >= props.length ? 0 : next;
      });
    }, 3000);

    return () => {
      clearInterval(int);
    };
  }, []);

  const title = titles[counter];
  const currentProps = props[counter];

  return (
    <div className="App">
      <h1>{title}</h1>

      <Snippet {...currentProps} />
    </div>
  );
}
