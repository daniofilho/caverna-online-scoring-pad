import constructions from "config/constructions";
import resources from "config/resources";

export default (player: IPlayer): number => {
  // Resources
  const totalResourcesScore = resources.reduce((total, resource) => {
    const resourceScore = Math.ceil(
      resource.points * player.resources[resource.id]
    );
    console.log(
      `${resource.id}: (${player.resources[resource.id]}x) => ${resourceScore}`
    );

    return total + resourceScore;
  }, 0);

  // Constructions
  const totalConstructions = player.constructions.reduce((total, { id }) => {
    const construction = constructions.find((o) => o.id === id);
    if (!construction) return total;

    console.log(`${construction.id}: => ${construction.score(player)}`);

    return total + construction.score(player);
  }, 0);

  let score = totalResourcesScore + totalConstructions;

  // Remove points because of animals
  if (player.resources.sheep === 0) {
    console.log("-2 because no sheep");
    score -= 2;
  }
  if (player.resources.boar === 0) {
    console.log("-2 because no boar");
    score -= 2;
  }
  if (player.resources.cattle === 0) {
    console.log("-2 because no cattle");
    score -= 2;
  }
  if (player.resources.donkey === 0) {
    console.log("-2 because no donkey");
    score -= 2;
  }

  // Remove up to 7 negative points if have Writing Chamber
  const hasWritingChamber = player.constructions.find(
    (o) => o.id === "writing-chamber"
  );
  if (hasWritingChamber) {
    if (score < 0) {
      if (score < -7) {
        console.log("has < -7 points, so score + 7");
        score -= 7;
      } else {
        console.log("has >= -7 points, so score = 0");
        score = 0;
      }
    }
  }

  return score;
};
