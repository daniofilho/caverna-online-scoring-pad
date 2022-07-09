import { DefaultTheme } from "styled-components/native";

export interface IThemesAvailable {
  light: DefaultTheme;
  dark: DefaultTheme;
}

export type ThemeNames = "dark" | "light";

export interface IUseThemeContextData {
  theme: DefaultTheme;
  toggleTheme: (newThemeName?: ThemeNames) => void;
}

export interface IUseThemeProviderProps {
  children: React.ReactNode;
}
