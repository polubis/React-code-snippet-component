import { DynamicSnippet } from "./DynamicSnippet";
import { StaticSnippet } from "./StaticSnippet";
import { SnippetProps } from "./models";

const Snippet = ({ src, children, ...props }: SnippetProps) => {
  // The src parameter has priority.
  if (src) return <DynamicSnippet src={src} {...props} />;

  if (children) return <StaticSnippet children={children} {...props} />;

  // The component cannot work properly, we throw an exception.
  throw Error("<Snippet> component requires src or children property.");
};

export type { SnippetProps };

export { Snippet };
