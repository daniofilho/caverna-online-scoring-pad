export type ICalculatorReducerStateProps = IPlayer[];

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

type PlayerProps = "name" | "avatar";

interface IDefaultPlayerParams {
  playerId: string;
  value: any;
}

interface IUpdatePlayerPropProps extends IDefaultPlayerParams {
  field: PlayerProps;
}

interface IUpdatePlayerResourceProps extends IDefaultPlayerParams {
  field: IAvailableResource;
}

export type AddPlayerProps = {
  player: IPlayer;
};

export type RemovePlayerProps = {
  playerId: string;
};

export interface ICalculatorReducerActionsProps {
  setState: (data: ICalculatorReducerStateProps) => void;
  addPlayer: (data: AddPlayerProps) => void;
  removePlayer: (data: RemovePlayerProps) => void;
  updatePlayerProp: (data: IUpdatePlayerPropProps) => void;
  updatePlayerResource: (data: IUpdatePlayerResourceProps) => void;
}

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export interface ICalculatorReducerProps {
  state: ICalculatorReducerStateProps;
  actions: ICalculatorReducerActionsProps;
}

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export interface IUseCalculatorContextProps
  extends ICalculatorReducerActionsProps {
  players: IPlayerScore[];

  startNewGame: () => void;

  addNewPlayer: () => void;
  removePlayer: (playerId: string) => void;

  getPlayer: (playerId: string) => IPlayerScore | undefined;
  getPlayerResource: (playerId: string, resource: IAvailableResource) => number;
}

export interface IUseCalculatorProviderProps {
  children: React.ReactNode;
}
