import { DynamicSnippet } from "./DynamicSnippet";
import { StaticSnippet } from "./StaticSnippet";
import { SnippetProps } from "./models";

const Snippet = ({
  src,
  children,
  description,
  header,
  language,
  linesCount,
  ascii
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
        ascii={ascii}
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
