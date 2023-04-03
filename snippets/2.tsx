interface SnippetProps {
  children?: string; // Code snippet passed as string.
  src?: string; // Link to code snippet.
  description?: string; // Some text displayed under snippet.
}

const Snippet = ({ children, src, description }: SnippetProps) => {
  // ...
};
