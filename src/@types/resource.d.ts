type IAvailableResourceType =
  | "material"
  | "animal"
  | "food"
  | "land"
  | "family";
type IAvailableResource =
  | "dog"
  | "sheep"
  | "donkey"
  | "boar"
  | "cattle"
  | "grain"
  | "vegetable"
  | "ruby"
  | "gold"
  | "beggingMarker"
  | "smallPasture"
  | "largePasture"
  | "oreMine"
  | "rubyMine"
  | "unusedSpace"
  | "dwarf"
  | "dwelling"
  | "adjacentDwelling"
  | "stone"
  | "ore"
  | "armedDwarf";

declare interface IResource {
  id: IAvailableResource;
  type: IAvailableResourceType;
  points: number;
  minQuantity: number;
  maxQuantity: number;
  // showOnly
}
