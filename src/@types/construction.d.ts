declare interface IConstruction {
  id: string;
  color: "orange" | "green" | "yellow";
  cost: {
    wood?: number;
    stone?: number;
    grain?: number;
    vegetable?: number;
    ore?: number;
    gold?: number;
    food?: number;
  };
  score: (player?: IPlayer) => number;
  scoreLabel: string;
}
