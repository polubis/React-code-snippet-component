import type { Language } from "prism-react-renderer";

interface CodeProps {
  children: string;
  language?: Language;
}

export type { CodeProps };
