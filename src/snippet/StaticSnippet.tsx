import type { StaticSnippetProps } from "./models";
import { SnippetContent } from "./SnippetContent";

// This component renders static snippet.
const StaticSnippet = (props: StaticSnippetProps) => (
  <SnippetContent {...props} />
);

export { StaticSnippet };
