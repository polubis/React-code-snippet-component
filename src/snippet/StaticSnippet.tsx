import type { StaticSnippetProps } from "./models";
import { SnippetContent } from "./SnippetContent";

// This component just renders static snippet.
const StaticSnippet = ({
  children,
  description,
  header,
  language
}: StaticSnippetProps) => (
  <SnippetContent
    children={children}
    description={description}
    header={header}
    language={language}
  />
);

export { StaticSnippet };
