import resources from "config/resources";

export default (player: IPlayer): number => {
  // Resources
  const totalResourcesScore = resources.reduce(
    (total, resource) =>
      total + Math.ceil(resource.points * player.resources[resource.id]),
    0
  );

  // Green Constructions
  // TODO
  const totalGreenConstructions = 0;

  // Orange Constructions
  // TODO
  const totalOrangeConstructions = 0;

  // Yellow Constructions
  // TODO
  const totalYellowConstructions = 0;

  return (
    totalResourcesScore +
    totalGreenConstructions +
    totalOrangeConstructions +
    totalYellowConstructions
  );
};
