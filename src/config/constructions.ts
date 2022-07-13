const constructions: IConstruction[] = [
  {
    id: "simple-dwelling-1",
    color: "orange",
    cost: {
      wood: 4,
      stone: 2,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "simple-dwelling-2",
    color: "orange",
    cost: {
      wood: 3,
      stone: 3,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "mixed-dweeling",
    color: "orange",
    cost: {
      wood: 5,
      stone: 4,
    },
    score: () => 4,
    scoreLabel: "4",
  },
  {
    id: "couple-dweeling",
    color: "orange",
    cost: {
      wood: 8,
      stone: 6,
    },
    score: () => 5,
    scoreLabel: "5",
  },
  {
    id: "additional-dweeling",
    color: "orange",
    cost: {
      wood: 4,
      stone: 3,
    },
    score: () => 5,
    scoreLabel: "5",
  },
  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    id: "carpent",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "stone-carver",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 1,
    scoreLabel: "1",
  },
  {
    id: "blacksmith",
    color: "green",
    cost: {
      wood: 1,
      stone: 2,
    },
    score: () => 3,
    scoreLabel: "3",
  },
  {
    id: "miner",
    color: "green",
    cost: {
      wood: 1,
      stone: 1,
    },
    score: () => 3,
    scoreLabel: "3",
  },
  {
    id: "builder",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "trader",
    color: "green",
    cost: {
      wood: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "slaughtering-cave",
    color: "green",
    cost: {
      wood: 2,
      stone: 2,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "cooking-cave",
    color: "green",
    cost: {
      stone: 2,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "working-cave",
    color: "green",
    cost: {
      stone: 1,
      wood: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "mining-cave",
    color: "green",
    cost: {
      stone: 2,
      wood: 3,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "breeding-cave",
    color: "green",
    cost: {
      grain: 1,
      stone: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "peaceful-cave",
    color: "green",
    cost: {
      wood: 2,
      stone: 2,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "cuddle-room",
    color: "green",
    cost: {
      wood: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "breakfast-room",
    color: "green",
    cost: {
      wood: 1,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "stubble-room",
    color: "green",
    cost: {
      wood: 1,
      ore: 1,
    },
    score: () => 1,
    scoreLabel: "1",
  },
  {
    id: "work-room",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "guest-room",
    color: "green",
    cost: {
      stone: 1,
      wood: 1,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "office-room",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "wood-supplier",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "stone-supplier",
    color: "green",
    cost: {
      wood: 1,
    },
    score: () => 1,
    scoreLabel: "1",
  },
  {
    id: "ruby-supplier",
    color: "green",
    cost: {
      wood: 2,
      stone: 2,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "dog-school",
    color: "green",
    cost: {},
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "quarry",
    color: "green",
    cost: {
      wood: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "seam",
    color: "green",
    cost: {
      wood: 2,
    },
    score: () => 1,
    scoreLabel: "1",
  },
  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  {
    id: "weaving-parlor",
    color: "yellow",
    cost: {
      wood: 2,
      stone: 1,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      return Math.floor(player.resources.sheep / 2);
    },
    scoreLabel: "*",
  },
  {
    id: "milking-parlor",
    color: "yellow",
    cost: {
      wood: 2,
      stone: 2,
    },
    score: (player?: IPlayer) => player?.resources.cattle || 0,
    scoreLabel: "*",
  },
  {
    id: "state-parlor",
    color: "yellow",
    cost: {
      stone: 3,
      gold: 5,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      return player.resources.adjacentDwelling * 4;
    },
    scoreLabel: "*",
  },
  {
    id: "hunting-parlor",
    color: "yellow",
    cost: {
      wood: 2,
    },
    score: () => 1,
    scoreLabel: "1",
  },
  {
    id: "beer-parlor",
    color: "yellow",
    cost: {
      wood: 2,
    },
    score: () => 3,
    scoreLabel: "3",
  },
  {
    id: "blacksmithing-parlor",
    color: "yellow",
    cost: {
      ore: 3,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "stone-storage",
    color: "yellow",
    cost: {
      wood: 3,
      ore: 1,
    },
    score: (player?: IPlayer) => player?.resources.stone || 0,
    scoreLabel: "*",
  },
  {
    id: "ore-storage",
    color: "yellow",
    cost: {
      wood: 1,
      stone: 2,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      return Math.floor(player.resources.ore / 2);
    },
    scoreLabel: "*",
  },
  {
    id: "spare-part-storage",
    color: "yellow",
    cost: {
      wood: 2,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "main-storage",
    color: "yellow",
    cost: {
      wood: 2,
      stone: 1,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;

      const totalYellowConstructions = player.constructions.filter(
        (o) => o.color === "yellow"
      );

      return Math.floor(totalYellowConstructions.length * 2);
    },
    scoreLabel: "*",
  },
  {
    id: "weapon-storage",
    color: "yellow",
    cost: {
      wood: 3,
      stone: 2,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      return player.resources.armedDwarf * 3;
    },
    scoreLabel: "*",
  },
  {
    id: "supplies-storage",
    color: "yellow",
    cost: {
      food: 3,
      wood: 1,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      return player.resources.armedDwarf === player.resources.dwarf ? 8 : 0;
    },
    scoreLabel: "*",
  },
  {
    id: "broom-chamber",
    color: "yellow",
    cost: {
      wood: 1,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      if (player.resources.dwarf === 5) return 5;
      if (player.resources.dwarf === 6) return 10;
      return 0;
    },
    scoreLabel: "*",
  },
  {
    id: "treasure-chamber",
    color: "yellow",
    cost: {
      wood: 1,
      stone: 1,
    },
    score: (player?: IPlayer) => player?.resources.ruby || 0,
    scoreLabel: "*",
  },
  {
    id: "food-chamber",
    color: "yellow",
    cost: {
      wood: 2,
      vegetable: 2,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      const {
        resources: { grain, vegetable },
      } = player;
      const minFoodNumber = Math.min(grain, vegetable);
      return Math.floor(minFoodNumber / 3);
    },
    scoreLabel: "*",
  },
  {
    id: "prayer-chamber",
    color: "yellow",
    cost: {
      wood: 2,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      return player.resources.armedDwarf === 0 ? 8 : 0;
    },
    scoreLabel: "*",
  },
  {
    id: "writing-chamber",
    color: "yellow",
    cost: {
      stone: 2,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "fodder-chamber",
    color: "yellow",
    cost: {
      grain: 2,
      stone: 1,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      const {
        resources: { boar, cattle, dog, donkey, sheep },
      } = player;
      const totalAnimals = boar + cattle + dog + donkey + sheep;
      return Math.floor(totalAnimals / 3);
    },
    scoreLabel: "*",
  },
];

export default constructions;
