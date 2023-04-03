import type { ReactNode } from "react";

import { CodeProps } from "../code";

type ASCII = string;
type Range = [number, number];

// Common interface to reduce duplication.
interface BaseProps {
  header?: ReactNode;
  description?: ReactNode;
  language?: CodeProps["language"];
  // Array of lines range to remove from snippet.
  ignored?: Range[];
}

// Interface to the presentation component.
interface SnippetContentProps extends BaseProps {
  children: string;
}

// Interface to the component that will
// show the code not from the link.
interface StaticSnippetProps extends BaseProps {
  children: string;
}

// Interface to the component that will load the code dynamically.
interface DynamicSnippetProps extends BaseProps {
  // Link to code which will be fetched.
  src: string;
  // Used to generate ASCII chart placeholders.
  linesCount?: number;
}

// Interface to the component wrapping component.
interface SnippetProps extends BaseProps {
  children?: string;
  src?: string;
  // Used to generate ASCII chart placeholders.
  linesCount?: number;
}

// When snippets not loaded yet.
interface PendingState {
  status: "pending";
  ascii: ASCII;
}

// When snippets is loaded.
interface OkState {
  status: "ok";
  code: string;
}

// When snippet load failed.
interface FailState {
  status: "fail";
  ascii: ASCII;
}

// Union of types for better type-safety.
type DynamicSnippetState = PendingState | OkState | FailState;

export type {
  SnippetContentProps,
  SnippetProps,
  DynamicSnippetProps,
  StaticSnippetProps,
  DynamicSnippetState,
  ASCII
};
