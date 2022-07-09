import { AvatarFullConfig } from "react-nice-avatar";

declare global {
  interface IPlayer {
    id: string;
    name: string;
    avatar: AvatarFullConfig;

    resources: {
      dog: number;
      sheep: number;
      donkey: number;
      boar: number;
      cattle: number;
      grain: number;
      vegetable: number;
      ruby: number;
      gold: number;
      beggingMarker: number;
      smallPasture: number;
      largePasture: number;
      oreMine: number;
      rubyMine: number;
      unusedSpace: number;
      dwarf: number;
      dwelling: number;
      adjacentDwelling: number;
      stone: number;
      ore: number;
      armedDwarf: number;
      goldConstruction: number;
    };
  }

  interface IPlayerScore extends IPlayer {
    totalScore: number;
  }
}
