declare interface IPlayer {
  id: string;
  name: string;

  resources: {
    wood: number;
    stones: number;
  };
}
