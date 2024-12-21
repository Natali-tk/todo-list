import { ReactNode } from "react";
import { ThemeProvider } from "./Theme/Theme";

type ContextProps = {
  children: ReactNode;
};
export const Context = ({ children }: ContextProps) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
