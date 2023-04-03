import { useEffect, useMemo, useState } from "react";
import type { DynamicSnippetProps, DynamicSnippetState } from "./models";
import { SnippetContent } from "./SnippetContent";
import { generateASCIIArt } from "./ASCII";

// Gets code for different statuses.
const getCode = (state: DynamicSnippetState): string => {
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
  // Generating ASCII art.
  const asciiArt = useMemo(() => generateASCIIArt(ascii, linesCount), [
    linesCount,
    ascii
  ]);
  const [state, setState] = useState<DynamicSnippetState>({
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

      // Fetching content from url.
      const response = await fetch(src);

      if (!response.ok) {
        setState({ status: "fail" });
        return;
      }

      // Parsing to text.
      const code = await response.text();

      setState({ code, status: "ok" });
    } catch (err) {
      setState({ status: "fail" });
    }
  };

  useEffect(() => {
    // Loading the code when src parameter change.
    fetchCode();
  }, [src]);

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
