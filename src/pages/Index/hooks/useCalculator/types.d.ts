import React from "react";

export interface IUseCalculatorContextProps {
  players: IPlayer[];

  startNewGame: () => void;

  addNewPlayer: () => void;
  removePlayer: (playerId: string) => void;
}

export interface IUseCalculatorProviderProps {
  children: React.ReactNode;
}
