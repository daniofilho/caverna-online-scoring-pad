import { UseAlertsProvider } from "./useAlerts";
import { UseCalculatorProvider } from "./useCalculator";
import { UseRouterMiddlerwareProvider } from "./useRouterMiddleware";
import { UseThemeProvider } from "./useTheme";

interface IAppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => (
  <UseRouterMiddlerwareProvider>
    <UseThemeProvider>
      <UseAlertsProvider>
        <UseCalculatorProvider>{children}</UseCalculatorProvider>
      </UseAlertsProvider>
    </UseThemeProvider>
  </UseRouterMiddlerwareProvider>
);

export default AppProvider;
