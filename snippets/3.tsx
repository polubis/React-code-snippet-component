const Snippet = ({ children, src, description }: SnippetProps) => {
  if (src) {
    return <div>Here will be rendered dynamic code snippet...</div>;
  }

  if (children) {
    return <div>Here will be rendered static code snippet...</div>;
  }

  throw Error("<Snippet> component requires src or children property.");
};
