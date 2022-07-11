import immer from "immer";

import config from "config/general";

import {
  ICalculatorReducerStateProps,
  AddPlayerProps,
  RemovePlayerProps,
  IUpdatePlayerPropProps,
  ITogglePlayerConstructionProps,
} from "./types";

const actions: any = {
  setState: (
    state: ICalculatorReducerStateProps,
    params: ICalculatorReducerStateProps
  ): ICalculatorReducerStateProps => {
    state = params;
    return state;
  },

  addPlayer: (
    state: ICalculatorReducerStateProps,
    { player }: AddPlayerProps
  ): ICalculatorReducerStateProps => {
    state = [...state, player];
    return state;
  },

  removePlayer: (
    state: ICalculatorReducerStateProps,
    { playerId }: RemovePlayerProps
  ): ICalculatorReducerStateProps => {
    state = state.filter((player) => player.id !== playerId);
    return state;
  },

  updatePlayerProp: (
    state: ICalculatorReducerStateProps,
    { playerId, field, value }: IUpdatePlayerPropProps
  ): ICalculatorReducerStateProps => {
    const player = state.findIndex((player) => player.id === playerId);

    state[player] = {
      ...state[player],
      [field]: value,
    };

    return state;
  },

  updatePlayerResource: (
    state: ICalculatorReducerStateProps,
    { playerId, field, value }: IUpdatePlayerPropProps
  ): ICalculatorReducerStateProps => {
    const playerIndex = state.findIndex((player) => player.id === playerId);

    if (playerIndex !== -1) {
      state[playerIndex] = {
        ...state[playerIndex],
        resources: {
          ...state[playerIndex].resources,
          [field]: value,
        },
      };
    }

    return state;
  },

  togglePlayerConstruction: (
    state: ICalculatorReducerStateProps,
    { playerId, construction }: ITogglePlayerConstructionProps
  ): ICalculatorReducerStateProps => {
    const playerIndex = state.findIndex((player) => player.id === playerId);

    if (playerIndex !== -1) {
      const playerHasConstruction = state[playerIndex].constructions.find(
        (o) => o.id === construction.id
      );

      if (playerHasConstruction) {
        state[playerIndex] = {
          ...state[playerIndex],
          constructions: state[playerIndex].constructions.filter(
            (o) => o.id !== construction.id
          ),
        };
      } else {
        state[playerIndex] = {
          ...state[playerIndex],
          constructions: [...state[playerIndex].constructions, construction],
        };
      }
    }

    return state;
  },
};

function reducer(
  state: ICalculatorReducerStateProps,
  action: IReducerGenericActions
): ICalculatorReducerStateProps {
  const data = immer(state, (draftState: ICalculatorReducerStateProps) =>
    action.type ? actions[action.type](draftState, action.params) : draftState
  );

  // Keep store sincronized with reducer
  if (typeof window === "undefined") return data;

  localStorage.setItem(
    `${config.localStorageKey}-reducer`,
    JSON.stringify(data)
  );

  return data;
}

export { actions, reducer };
