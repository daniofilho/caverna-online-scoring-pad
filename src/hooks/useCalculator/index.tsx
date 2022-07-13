import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { useLocalStorage } from "react-use";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import mapReducerActions from "utils/mapReducerActions";

import { useAlerts } from "hooks/useAlerts";
import { useRouterMiddleware } from "hooks/useRouterMiddleware";

import config from "config/general";

import * as CalculatorReducer from "./reducer";
import createNewPlayer from "./services/createNewPlayer";
import getInitialData from "./services/getInitialData";
import getPlayerFinalScore from "./services/getPlayerFinalScore";
import {
  IUseCalculatorProviderProps,
  IUseCalculatorContextProps,
  ICalculatorReducerActionsProps,
  ICalculatorReducerProps,
} from "./types";

const useCalculatorContext = createContext<IUseCalculatorContextProps>(
  {} as IUseCalculatorContextProps
);

const UseCalculatorProvider: React.FC<IUseCalculatorProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const { navigateTo } = useRouterMiddleware();
  const { confirmMessage } = useAlerts();
  const { t } = useTranslation();

  const [storeReducer] = useLocalStorage(`${config.localStorageKey}-reducer`);

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // # Reducer
  const [state, dispatch] = useReducer(CalculatorReducer.reducer, []);
  const actions: ICalculatorReducerActionsProps = useMemo(
    () => mapReducerActions(CalculatorReducer.actions, dispatch),
    []
  );
  const reducer: ICalculatorReducerProps = useMemo(
    () => ({ state, actions }),
    [actions, state]
  );

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const addNewPlayer = useCallback(() => {
    const player = createNewPlayer();
    reducer.actions.addPlayer({
      player,
    });

    navigateTo(`/player/${player.id}`);
  }, [reducer.actions, navigateTo]);

  const removePlayer = useCallback(
    (playerId: string) =>
      confirmMessage({
        message: t("common:sure-delete-player"),
        onYesCallback: () => {
          reducer.actions.removePlayer({ playerId });
          navigateTo(`/`);
        },
      }),
    [confirmMessage, navigateTo, reducer.actions, t]
  );

  // # If has data in storage, update state
  // Using useEffect to ensure that localStorage will be accessed only on client side
  // Also makes sure to load only once
  useEffect(() => {
    const initialData = getInitialData(storeReducer);
    reducer.actions.setState(initialData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const startNewGame = useCallback(
    () =>
      confirmMessage({
        message: t("common:sure-new-game"),
        onYesCallback: () => {
          reducer.actions.setState([]);
        },
      }),
    [confirmMessage, reducer.actions, t]
  );

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const playersScore = useMemo(() => {
    const playersScoreAux: IPlayerScore[] = reducer.state.map(
      (player): IPlayerScore => {
        const score = getPlayerFinalScore(player);

        return {
          ...player,
          totalScore: score.finalScore,
          scoreLog: score.log,
        };
      }
    );

    // Sort by score
    playersScoreAux.sort((a, b) => a.totalScore - b.totalScore);
    playersScoreAux.reverse();

    return playersScoreAux;
  }, [reducer.state]);

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const selectedPlayer = useMemo(
    () =>
      playersScore.find(
        (player) => player.id === String(router.query.playerId)
      ),
    [playersScore, router.query.playerId]
  );

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const contextValue = useMemo(
    () => ({
      ...reducer.actions,

      players: playersScore,

      addNewPlayer,
      removePlayer,

      startNewGame,

      selectedPlayer,
    }),
    [
      reducer.actions,
      playersScore,
      addNewPlayer,
      removePlayer,
      startNewGame,
      selectedPlayer,
    ]
  );

  return (
    <useCalculatorContext.Provider value={contextValue}>
      {children}
    </useCalculatorContext.Provider>
  );
};

const useCalculator = (): IUseCalculatorContextProps => {
  const context = useContext(useCalculatorContext);
  if (!context)
    throw new Error(
      "useCalculator must be used within an UseCalculatorProvider"
    );
  return context;
};

export { UseCalculatorProvider, useCalculator };
