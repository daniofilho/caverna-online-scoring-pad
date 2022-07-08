import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useLocalStorage } from "react-use";

import { useColorMode } from "@chakra-ui/react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import darkTheme from "styles/themes/dark";
import lightTheme from "styles/themes/light";

import config from "config/general";

import {
  IThemesAvailable,
  IUseThemeContextData,
  IUseThemeProviderProps,
  ThemeNames,
} from "./hook-types";

const themes: IThemesAvailable = {
  light: lightTheme,
  dark: darkTheme,
};

const UseThemeContext = createContext<IUseThemeContextData>(
  {} as IUseThemeContextData
);

const UseThemeProvider: React.FC<IUseThemeProviderProps> = ({ children }) => {
  const { setColorMode } = useColorMode();

  const [storeThemeName, setStoreThemeName] = useLocalStorage(
    `${config.localStorageKey}-theme`
  );

  const [theme, setTheme] = useState<DefaultTheme>(
    storeThemeName === "dark" ? themes.dark : themes.light
  );

  const toggleTheme = useCallback(
    (newThemeName?: ThemeNames): void => {
      let newTheme = theme.name === "light" ? themes.dark : themes.light;

      if (newThemeName) {
        newTheme = newThemeName === "light" ? themes.light : themes.dark;
      }

      setColorMode(newTheme.name);
      setTheme(newTheme);
      setStoreThemeName(newTheme.name);
    },
    [setColorMode, setStoreThemeName, theme.name]
  );

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <UseThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UseThemeContext.Provider>
  );
};

const useTheme = (): IUseThemeContextData => {
  const context = useContext(UseThemeContext);
  if (!context)
    throw new Error("useTheme must be used within an UseThemeProvider");
  return context;
};

export { UseThemeProvider, useTheme };
