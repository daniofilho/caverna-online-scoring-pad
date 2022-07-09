import { genConfig } from "react-nice-avatar";

import { v4 as uuid } from "uuid";

export default (): IPlayer => ({
  id: uuid(),
  name: "Player",
  avatar: genConfig(),

  resources: {
    dwarf: 2,
    unusedSpace: 21,
    dog: 0,
    sheep: 0,
    donkey: 0,
    boar: 0,
    cattle: 0,
    grain: 0,
    vegetable: 0,
    ruby: 0,
    gold: 0,
    beggingMarker: 0,
    smallPasture: 0,
    largePasture: 0,
    oreMine: 0,
    rubyMine: 0,
    dwelling: 0,
    adjacentDwelling: 0,
    stone: 0,
    ore: 0,
    armedDwarf: 0,
    goldConstruction: 0,
  },
});
