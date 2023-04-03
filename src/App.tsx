import { useState } from "react";
import { Snippet } from "./snippet";
import "./styles.css";

export default function App() {
  const [loadCounter, setLoadCounter] = useState(0);

  return (
    <div className="App">
      <h1>Dynamic code snippet</h1>

      <Snippet
        header={<button>Some action</button>}
        src="https://raw.githubusercontent.com/polubis/WebBlog/main/.prettierignore"
        description="Some text for example"
        linesCount={4}
      />

      <div style={{ marginTop: "40px" }} />

      <h1>Static code snippet</h1>
      <Snippet
        header={<button>Some action</button>}
        description="Some text for example"
      >
        {`
import { Snippet } from "./snippet";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Static code snippet</h1>
      <Snippet>{import React from 'react'}</Snippet>
    </div>
  );
}
      `}
      </Snippet>

      <div style={{ marginTop: "40px" }} />

      <h1>Dynamic when error</h1>

      <Snippet
        header={<button>Some action</button>}
        src="https://raw.githubusercontentWebBlog/main/.prettierignore"
        description="Some text for example"
        linesCount={4}
      />

      <div style={{ marginTop: "40px" }} />

      <h1>Toggle snippet</h1>

      <Snippet
        header={
          <button onClick={() => setLoadCounter((prev) => prev + 1)}>
            Refetch
          </button>
        }
        key={"" + loadCounter}
        src="https://raw.githubusercontentWebBlog/main/.prettierignore"
        description="Some text for example"
        linesCount={30}
      />
    </div>
  );
}
