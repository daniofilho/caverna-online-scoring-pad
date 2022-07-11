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

interface ITogglePlayerConstructionProps {
  playerId: string;
  construction: IConstruction;
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
  togglePlayerConstruction: (data: ITogglePlayerConstructionProps) => void;
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
  selectedPlayer: IPlayerScore | undefined;

  startNewGame: () => void;

  addNewPlayer: () => void;
  removePlayer: (playerId: string) => void;
}

export interface IUseCalculatorProviderProps {
  children: React.ReactNode;
}
