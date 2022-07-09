import React from "react";

export interface IUseCalculatorContextProps {
  players: IPlayerScore[];

  startNewGame: () => void;

  addNewPlayer: () => void;
  removePlayer: (playerId: string) => void;
}

export interface IUseCalculatorProviderProps {
  children: React.ReactNode;
}
