import type { StaticSnippetProps } from "./models";
import { SnippetContent } from "./SnippetContent";

// This component just renders static snippet.
const StaticSnippet = (props: StaticSnippetProps) => (
  <SnippetContent {...props} />
);

export { StaticSnippet };
