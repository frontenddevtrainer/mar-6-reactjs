import React, { createContext, useState } from "react";

export enum ThemeOptions {
  light = "Light",
  dark = "Dark",
}

export interface Theme {
  theme: ThemeOptions;
  change(theme: ThemeOptions): void;
}

export const ThemeContext = createContext<Theme>({
  theme: ThemeOptions.dark,
  change() {},
});

const { Provider } = ThemeContext;

export const ThemeProvider = ({
  children,
  theme: defaultTheme = ThemeOptions.dark,
}: {
  children: JSX.Element;
  theme?: ThemeOptions;
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  const change = (theme: ThemeOptions) => {
    setTheme(theme);
  };

  return <Provider value={{ theme: theme, change }}>{children}</Provider>;
};
