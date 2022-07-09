import { createContext, useCallback, useContext, useMemo } from "react";

import { useRouter } from "next/router";

interface IUseRouterMiddlerwareContextData {
  navigateTo: (path: string) => void;
}

interface IUseRouterMiddlerwareProviderProps {
  children: React.ReactNode;
}

const useRouterMiddlewareContext =
  createContext<IUseRouterMiddlerwareContextData>(
    {} as IUseRouterMiddlerwareContextData
  );
const UseRouterMiddlerwareProvider: React.FC<
  IUseRouterMiddlerwareProviderProps
> = ({ children }) => {
  const router = useRouter();

  // This is to correct animation glitch when changing routes
  const navigateTo = useCallback(
    (path: string) => router.push(path, path, { scroll: false }),
    [router]
  );

  const contextValue = useMemo(() => ({ navigateTo }), [navigateTo]);

  return (
    <useRouterMiddlewareContext.Provider value={contextValue}>
      {children}
    </useRouterMiddlewareContext.Provider>
  );
};
const useRouterMiddleware = (): IUseRouterMiddlerwareContextData => {
  const context = useContext(useRouterMiddlewareContext);
  if (!context)
    throw new Error(
      "useRouterMiddleware must be used within an UseRouterMiddlerwareProvider"
    );
  return context;
};
export { UseRouterMiddlerwareProvider, useRouterMiddleware };
