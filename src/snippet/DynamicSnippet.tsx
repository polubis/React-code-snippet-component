import { useEffect, useMemo, useState } from "react";
import type { DynamicSnippetProps } from "./models";
import { SnippetContent } from "./SnippetContent";
import { trimASCIIArt } from "./ASCII";

interface PendingState {
  status: "pending";
  ascii: string;
}

interface OkState {
  status: "ok";
  code: string;
}

interface FailState {
  status: "fail";
}

// Union of types for better type-safety.
type State = PendingState | OkState | FailState;

// Gets code for different statuses.
const getCode = (state: State): string => {
  if (state.status === "pending") return state.ascii;

  if (state.status === "fail") return "Failed";

  return state.code;
};

// This component loads snippet via src parameter.
const DynamicSnippet = ({
  src,
  description,
  header,
  language,
  linesCount,
  ascii
}: DynamicSnippetProps) => {
  const asciiArt = useMemo(() => trimASCIIArt(ascii, linesCount), [
    linesCount,
    ascii
  ]);
  const [state, setState] = useState<State>({
    status: "pending",
    ascii: asciiArt
  });

  const fetchCode = async (): Promise<void> => {
    try {
      // To avoid 2x rerenders
      if (state.status !== "pending") {
        setState({
          status: "pending",
          ascii: asciiArt
        });
      }

      // Fetching content and parsing it to string.
      const code = await (await fetch(src)).text();

      setState({ code, status: "ok" });
    } catch (err) {
      setState({ status: "fail" });
    }
  };

  useEffect(() => {
    fetchCode();
  }, []);

  const children = useMemo(() => getCode(state), [state]);

  return (
    <SnippetContent
      children={children}
      description={description}
      header={header}
      language={language}
    />
  );
};

export { DynamicSnippet };
