import type { ReactNode } from "react";

import { CodeProps } from "../code";

interface BaseProps {
  header?: ReactNode;
  description?: ReactNode;
  language?: CodeProps["language"];
}

interface SnippetContentProps extends BaseProps {
  children: string;
}

interface StaticSnippetProps extends BaseProps {
  children: string;
}

interface DynamicSnippetProps extends BaseProps {
  // Link to code which will be fetched.
  src: string;
  // Used to generate ASCII chart placeholders.
  linesCount?: number;
  // Custom ASCII chart.
  ascii?: string;
}

interface SnippetProps extends BaseProps {
  children?: string;
  src?: string;
  // Used to generate ASCII chart placeholders.
  linesCount?: number;
  // Custom ASCII chart.
  ascii?: string;
}

export type {
  SnippetContentProps,
  SnippetProps,
  DynamicSnippetProps,
  StaticSnippetProps
};
