import { DynamicSnippet } from "./DynamicSnippet";
import { StaticSnippet } from "./StaticSnippet";
import { SnippetProps } from "./models";

// Add option to display changes via red bg and green
// Add option to toggle content inside snippet and be able later to expand it.

const Snippet = ({
  src,
  children,
  description,
  header,
  language,
  linesCount
}: SnippetProps) => {
  // The src parameter has priority.
  if (src)
    return (
      <DynamicSnippet
        language={language}
        description={description}
        header={header}
        src={src}
        linesCount={linesCount}
      />
    );

  if (children)
    return (
      <StaticSnippet
        children={children}
        description={description}
        header={header}
        language={language}
      />
    );

  // The component cannot work properly, we throw an exception.
  throw Error("<Snippet> component requires src or children property.");
};

export type { SnippetProps };

export { Snippet };
