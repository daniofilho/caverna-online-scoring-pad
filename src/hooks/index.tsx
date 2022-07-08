import { UseThemeProvider } from './useTheme';

interface IAppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => (
  <UseThemeProvider>{children}</UseThemeProvider>
);

export default AppProvider;
