import { UseAlertsProvider } from "./useAlerts";
import { UseThemeProvider } from "./useTheme";

interface IAppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => (
  <UseThemeProvider>
    <UseAlertsProvider>{children}</UseAlertsProvider>
  </UseThemeProvider>
);

export default AppProvider;
