import { v4 as uuid } from "uuid";

export default (): IPlayer => ({
  id: uuid(),
  name: "Player",

  resources: {
    wood: 0,
    stones: 0,
  },
});
