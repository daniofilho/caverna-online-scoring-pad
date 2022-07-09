declare interface IPlayer {
  id: string;
  name: string;

  resources: {
    wood: number;
    stones: number;
  };
}

declare interface IPlayerScore extends IPlayer {
  totalScore: number;
}
