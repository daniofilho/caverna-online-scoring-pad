import { i18n } from "next-i18next";

const constructions = (): IConstruction[] => [
  {
    id: "simple-dwelling-1",
    label: String(i18n?.t("constructions:simple-dwelling-1")),
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
    label: String(i18n?.t("constructions:simple-dwelling-2")),
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
    label: String(i18n?.t("constructions:mixed-dweeling")),
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
    label: String(i18n?.t("constructions:couple-dweeling")),
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
    label: String(i18n?.t("constructions:additional-dweeling")),
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
    label: String(i18n?.t("constructions:carpent")),
    id: "carpent",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    label: String(i18n?.t("constructions:stone-carver")),
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
    label: String(i18n?.t("constructions:blacksmith")),
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
    label: String(i18n?.t("constructions:miner")),
    color: "green",
    cost: {
      wood: 1,
      stone: 1,
    },
    score: () => 3,
    scoreLabel: "3",
  },
  {
    label: String(i18n?.t("constructions:builder")),
    id: "builder",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    label: String(i18n?.t("constructions:trader")),
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
    label: String(i18n?.t("constructions:slaughtering-cave")),
    color: "green",
    cost: {
      wood: 2,
      stone: 2,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    label: String(i18n?.t("constructions:cooking-cave")),
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
    label: String(i18n?.t("constructions:working-cave")),
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
    label: String(i18n?.t("constructions:mining-cave")),
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
    label: String(i18n?.t("constructions:breeding-cave")),
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
    label: String(i18n?.t("constructions:peaceful-cave")),
    color: "green",
    cost: {
      wood: 2,
      stone: 2,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    label: String(i18n?.t("constructions:cuddle-room")),
    id: "cuddle-room",
    color: "green",
    cost: {
      wood: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    label: String(i18n?.t("constructions:breakfast-room")),
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
    label: String(i18n?.t("constructions:stubble-room")),
    color: "green",
    cost: {
      wood: 1,
      ore: 1,
    },
    score: () => 1,
    scoreLabel: "1",
  },
  {
    label: String(i18n?.t("constructions:work-room")),
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
    label: String(i18n?.t("constructions:guest-room")),
    color: "green",
    cost: {
      stone: 1,
      wood: 1,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    label: String(i18n?.t("constructions:office-room")),
    id: "office-room",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    label: String(i18n?.t("constructions:wood-supplier")),
    id: "wood-supplier",
    color: "green",
    cost: {
      stone: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    label: String(i18n?.t("constructions:stone-supplier")),
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
    label: String(i18n?.t("constructions:ruby-supplier")),
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
    label: String(i18n?.t("constructions:dog-school")),
    color: "green",
    cost: {},
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "quarry",
    label: String(i18n?.t("constructions:quarry")),
    color: "green",
    cost: {
      wood: 1,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "seam",
    label: String(i18n?.t("constructions:seam")),
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
    label: String(i18n?.t("constructions:weaving-parlor")),
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
    label: String(i18n?.t("constructions:milking-parlor")),
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
    label: String(i18n?.t("constructions:state-parlor")),
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
    label: String(i18n?.t("constructions:hunting-parlor")),
    color: "yellow",
    cost: {
      wood: 2,
    },
    score: () => 1,
    scoreLabel: "1",
  },
  {
    id: "beer-parlor",
    label: String(i18n?.t("constructions:beer-parlor")),
    color: "yellow",
    cost: {
      wood: 2,
    },
    score: () => 3,
    scoreLabel: "3",
  },
  {
    id: "blacksmithing-parlor",
    label: String(i18n?.t("constructions:blacksmithing-parlor")),
    color: "yellow",
    cost: {
      ore: 3,
    },
    score: () => 2,
    scoreLabel: "2",
  },
  {
    id: "stone-storage",
    label: String(i18n?.t("constructions:stone-storage")),
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
    label: String(i18n?.t("constructions:ore-storage")),
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
    label: String(i18n?.t("constructions:spare-part-storage")),
    color: "yellow",
    cost: {
      wood: 2,
    },
    score: () => 0,
    scoreLabel: "0",
  },
  {
    id: "main-storage",
    label: String(i18n?.t("constructions:main-storage")),
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
    label: String(i18n?.t("constructions:weapon-storage")),
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
    label: String(i18n?.t("constructions:supplies-storage")),
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
    label: String(i18n?.t("constructions:broom-chamber")),
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
    label: String(i18n?.t("constructions:treasure-chamber")),
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
    label: String(i18n?.t("constructions:food-chamber")),
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
      return minFoodNumber * 2;
    },
    scoreLabel: "*",
  },
  {
    id: "prayer-chamber",
    label: String(i18n?.t("constructions:prayer-chamber")),
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
    label: String(i18n?.t("constructions:writing-chamber")),
    color: "yellow",
    cost: {
      stone: 2,
    },
    score: (player?: IPlayer) => {
      if (!player) return 0;
      let totalOfNegativePoints = 0;

      // will loose some points?

      // for animals
      if (player.resources.sheep === 0) {
        totalOfNegativePoints += 2;
      }
      if (player.resources.boar === 0) {
        totalOfNegativePoints += 2;
      }
      if (player.resources.cattle === 0) {
        totalOfNegativePoints += 2;
      }
      if (player.resources.donkey === 0) {
        totalOfNegativePoints += 2;
      }

      // for unused space
      if (player.resources.unusedSpace > 0) {
        totalOfNegativePoints += player.resources.unusedSpace;
      }

      if (totalOfNegativePoints <= 7) {
        return totalOfNegativePoints;
      }

      return 7;
    },
    scoreLabel: "0",
  },
  {
    id: "fodder-chamber",
    label: String(i18n?.t("constructions:fodder-chamber")),
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
