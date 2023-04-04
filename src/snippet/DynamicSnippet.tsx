import { useEffect, useMemo, useState } from "react";
import type { DynamicSnippetProps, DynamicSnippetState } from "./models";
import { SnippetContent } from "./SnippetContent";
import { ASCII_IMGS, generateASCIIArt } from "./ASCII";

// Gets code for different statuses.
const getCode = (state: DynamicSnippetState): string => {
  return state.status === "pending" || state.status === "fail"
    ? state.ascii
    : state.code;
};

// This component loads snippet via src parameter.
const DynamicSnippet = ({
  src,
  description,
  header,
  language,
  linesCount
}: DynamicSnippetProps) => {
  // Generates ASCII art.
  const catASCII = useMemo(() => generateASCIIArt(ASCII_IMGS.CAT, linesCount), [
    linesCount
  ]);
  const [state, setState] = useState<DynamicSnippetState>({
    status: "pending",
    ascii: catASCII
  });

  const fetchCode = async (): Promise<void> => {
    try {
      // To avoid 2x rerenders
      if (state.status !== "pending") {
        setState({
          status: "pending",
          ascii: catASCII
        });
      }

      // Loads content from url.
      const response = await fetch(src);

      if (!response.ok) {
        throw Error("Something went wrong");
      }

      // Parses into text.
      const code = await response.text();

      setState({ code, status: "ok" });
    } catch (err) {
      setState({
        status: "fail",
        ascii: generateASCIIArt(ASCII_IMGS.SPIDER, linesCount)
      });
    }
  };

  useEffect(() => {
    // Loads the code when src parameter change.
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
