import { Snippet } from "./snippet";
import "./styles.css";

export default function App() {
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
    </div>
  );
}