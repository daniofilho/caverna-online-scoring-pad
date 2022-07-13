import constructions from "config/constructions";
import resources from "config/resources";

export default (player: IPlayer): number => {
  // Resources
  const totalResourcesScore = resources.reduce(
    (total, resource) =>
      total + Math.ceil(resource.points * player.resources[resource.id]),
    0
  );

  // Constructions
  const totalConstructions = player.constructions.reduce((total, { id }) => {
    const construction = constructions.find((o) => o.id === id);
    if (!construction) return total;

    return total + construction.score(player);
  }, 0);

  let score = totalResourcesScore + totalConstructions;
  
  // Remove points because of animals
  if (player.resources.sheep === 0) score -= 2;
  if (player.resources.boar === 0) score -= 2;
  if (player.resources.cattle === 0) score -= 2;
  if (player.resources.donkey === 0) score -= 2;

  // Remove up to 7 negative points if have Writing Chamber
  const hasWritingChamber = player.constructions.find(
    (o) => o.id === "writing-chamber"
  );
  if (hasWritingChamber) {
    if (score < 0) {
      if (score < -7) {
        score -= 7;
      } else {
        score = 0;
      }
    }
  }

  return score;
};
