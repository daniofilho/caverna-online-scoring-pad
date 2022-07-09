import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocalStorage } from "react-use";

import { useTranslation } from "next-i18next";

import { useAlerts } from "hooks/useAlerts";

import config from "config/general";

import createNewPlayer from "./services/createNewPlayer";
import getInitialData from "./services/getInitialData";
import {
  IUseCalculatorProviderProps,
  IUseCalculatorContextProps,
} from "./types";

const useCalculatorContext = createContext<IUseCalculatorContextProps>(
  {} as IUseCalculatorContextProps
);

const UseCalculatorProvider: React.FC<IUseCalculatorProviderProps> = ({
  children,
}) => {
  const { confirmMessage } = useAlerts();
  const { t } = useTranslation();

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const [storePlayers, setStorePlayers, removeStorePlayers] = useLocalStorage(
    `${config.localStorageKey}-players`
  );

  const [players, setPlayers] = useState<IPlayer[]>([]);

  const addNewPlayer = useCallback(() => {
    setPlayers((oldState) => [...oldState, createNewPlayer()]);
  }, []);

  const removePlayer = useCallback(
    (playerId: string) =>
      confirmMessage({
        message: t("common:sure-delete-player"),
        onYesCallback: () => {
          setPlayers((oldState) =>
            oldState.filter((player) => player.id !== playerId)
          );
        },
      }),
    [confirmMessage, t]
  );

  // Keep store updated
  useEffect(() => {
    setStorePlayers(JSON.stringify(players));
  }, [players, setStorePlayers]);

  // # If has data in storage, update state
  // Using useEffect to ensure that localStorage will be accessed only on client side
  // Also makes sure to load only once
  useEffect(() => {
    const initialData = getInitialData(storePlayers);
    setPlayers(initialData.players);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const startNewGame = useCallback(
    () =>
      confirmMessage({
        message: t("common:sure-new-game"),
        onYesCallback: () => {
          setPlayers([]);
          removeStorePlayers();
        },
      }),
    [confirmMessage, removeStorePlayers, t]
  );

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const playersScore = useMemo(() => {
    const playersScoreAux: IPlayerScore[] = players.map(
      (player): IPlayerScore => ({
        ...player,
        // TODO calculate the score
        totalScore: Math.floor(Math.random() * 100) + -30,
      })
    );

    // Sort by score
    playersScoreAux.sort((a, b) => a.totalScore - b.totalScore);
    playersScoreAux.reverse();

    return playersScoreAux;
  }, [players]);

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const contextValue = useMemo(
    () => ({ players: playersScore, addNewPlayer, removePlayer, startNewGame }),
    [playersScore, addNewPlayer, removePlayer, startNewGame]
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
