import { Code } from "../code";
import { Container, Header, Description } from "./style";
import type { SnippetContentProps } from "./models";

const SnippetContent = ({
  children,
  header,
  description
}: SnippetContentProps) => {
  return (
    // The class is added with the prefix ui to
    // reduce the risk of collisions with other
    // classes in the application.
    <Container className="ui-snippet-content">
      {header && (
        <Header className="ui-snippet-content-header">{header}</Header>
      )}
      <Code children={children} />
      {description && (
        <Description className="ui-snippet-content-description">
          {description}
        </Description>
      )}
    </Container>
  );
};

export { SnippetContent };
