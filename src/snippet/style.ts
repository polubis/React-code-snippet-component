import styled from "styled-components";

import { defaultCodeTheme } from "../code";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: wrap;
  background: red;
  gap: 8px;
  padding: 8px 12px;
  background: ${defaultCodeTheme.plain.backgroundColor};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  /* If header component is added then we're changing radius. */
  & + .ui-code .ui-code-pre {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const Description = styled.div`
  padding: 8px 12px;
`;

const Container = styled.div`
  max-width: 100vw;
`;

export { Header, Container, Description };
