import { i18n } from "next-i18next";

import constructions from "config/constructions";
import resources from "config/resources";

interface IFinalScoreSummary {
  scoreForAnimals: number;
  scoreForFood: number;
  scoreForMaterials: number;
  scoreForLand: number;
  scoreForFamily: number;
  scoreForConstructions: number;

  finalScore: number;

  log: string;
}

export default (player: IPlayer): IFinalScoreSummary => {
  let log = "";
  let score = 0;

  const calculateResourceScore = (resources: IResource[]): number =>
    resources.reduce((total, resource) => {
      const resourceScore = Math.ceil(
        resource.points * player.resources[resource.id]
      );

      if (resource.id === "adjacentDwelling") {
        log += `<p>${i18n?.t(`resources:${resource.id}`)}: (${
          player.resources[resource.id]
        }x)  </p>`;
      } else {
        log += `<p>${i18n?.t(`resources:${resource.id}`)}: (${
          player.resources[resource.id]
        }x) <strong>${resourceScore}</strong></p>`;
      }

      return total + resourceScore;
    }, 0);

  // # Animals

  const animalsResources = resources.filter((o) => o.type === "animal");
  const scoreForAnimals = calculateResourceScore(animalsResources);

  log += "<hr />";

  score += scoreForAnimals;

  log += `<p>${i18n?.t("common:score-so-far")} <strong>${score}</strong></p>`;

  log += "<hr />";

  // Remove points because of animals
  if (player.resources.sheep === 0) {
    log += `<p>${i18n?.t("common:missing-animal")} ${i18n?.t(
      `resources:sheep`
    )} <strong>-2</strong></p>`;
    score -= 2;
  }
  if (player.resources.boar === 0) {
    log += `<p>${i18n?.t("common:missing-animal")} ${i18n?.t(
      `resources:boar`
    )} <strong>-2</strong></p>`;
    score -= 2;
  }
  if (player.resources.cattle === 0) {
    log += `<p>${i18n?.t("common:missing-animal")} ${i18n?.t(
      `resources:cattle`
    )} <strong>-2</strong></p>`;
    score -= 2;
  }
  if (player.resources.donkey === 0) {
    log += `<p>${i18n?.t("common:missing-animal")} ${i18n?.t(
      `resources:donkey`
    )} <strong>-2</strong></p>`;
    score -= 2;
  }

  log += "<hr />";

  // # Food
  const foodResources = resources.filter((o) => o.type === "food");
  const scoreForFood = calculateResourceScore(foodResources);

  score += scoreForFood;

  log += "<hr />";

  log += `<p>${i18n?.t("common:score-so-far")} <strong>${score}</strong></p>`;

  log += "<hr />";

  // # Materials
  const materialsResources = resources.filter((o) => o.type === "material");
  const scoreForMaterials = calculateResourceScore(materialsResources);

  score += scoreForMaterials;

  log += "<hr />";

  log += `<p>${i18n?.t("common:score-so-far")} <strong>${score}</strong></p>`;

  log += "<hr />";

  // # Family
  const familyResources = resources.filter((o) => o.type === "family");
  const scoreForFamily = calculateResourceScore(familyResources);

  score += scoreForFamily;

  log += "<hr />";

  log += `<p>${i18n?.t("common:score-so-far")} <strong>${score}</strong></p>`;

  log += "<hr />";

  // # Land
  const landResources = resources.filter((o) => o.type === "land");
  const scoreForLand = calculateResourceScore(landResources);

  score += scoreForLand;

  log += "<hr />";

  log += `<p>${i18n?.t("common:score-so-far")} <strong>${score}</strong></p>`;

  log += "<hr />";

  // # Constructions
  const scoreForConstructions = player.constructions.reduce((total, { id }) => {
    const construction = constructions().find((o) => o.id === id);
    if (!construction) return total;

    const constructionScore = construction.score(player);

    // negative-points-compensated
    if (construction.id === "writing-chamber") {
      log += `<p>${i18n?.t("common:negative-points-compensated")} ${i18n?.t(
        `constructions:writing-chamber`
      )}: <strong>${construction.score(player)}</strong></p>`;
    } else {
      log += `<p>${i18n?.t(
        `constructions:${construction.id}`
      )}: <strong>${constructionScore}</strong></p>`;
    }

    return total + constructionScore;
  }, 0);

  log += "<hr />";

  score += scoreForConstructions;

  log += `<p>${i18n?.t("common:final-score")} <strong>${score}</strong></p>`;

  return {
    scoreForAnimals,
    scoreForFood,
    scoreForMaterials,
    scoreForLand,
    scoreForFamily,
    scoreForConstructions,

    finalScore: score,
    log,
  };
};
