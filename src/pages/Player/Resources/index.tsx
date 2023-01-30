import React, { useCallback } from "react";
import { GiCheckeredFlag, GiInfinity } from "react-icons/gi";

import { useTranslation } from "next-i18next";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import { useCalculator } from "hooks/useCalculator";

import resources from "config/resources";

import Image from "components/atom/Image";

import { Container } from "./styles";

const Resources: React.FC = () => {
  const { t } = useTranslation();
  const { updatePlayerResource, selectedPlayer } = useCalculator();

  const canShowResource = useCallback(
    (resource: IResource) => {
      if (!resource.showWhenHasConstructionId) return true;

      let canShow = false;

      resource.showWhenHasConstructionId.forEach((resourceId) => {
        const playerHasConstruction = selectedPlayer?.constructions.find(
          (o) => o.id === resourceId
        );

        if (playerHasConstruction) canShow = true;
      });

      return canShow;
    },
    [selectedPlayer?.constructions]
  );

  if (!selectedPlayer) return <></>;

  const { id: playerId } = selectedPlayer;

  return (
    <Container>
      <div>
        <section>
          <div />
          <div />
          <GiInfinity />
          <GiCheckeredFlag />
        </section>
      </div>

      {resources.map((resource, index) => {
        const { id, points, maxQuantity, minQuantity, type } = resource;
        const playerResourceQuantity = selectedPlayer.resources[id];

        const canShow = canShowResource(resource);

        if (!canShow) return <React.Fragment key={id} />;

        return (
          <div
            key={id}
            className={`${type !== resources[index + 1]?.type ? "last" : ""} `}
          >
            <header>
              <span>{t(`resources:${id}`)}</span>
            </header>

            <section>
              <div>
                <Image
                  src={`/images/resources/${id}.png`}
                  alt={id}
                  width={40}
                  height={40}
                />
              </div>

              <Slider
                value={playerResourceQuantity}
                min={minQuantity}
                max={maxQuantity}
                colorScheme="telegram"
                onChange={(value) =>
                  updatePlayerResource({
                    playerId,
                    field: id,
                    value,
                  })
                }
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>

                <SliderThumb />
              </Slider>

              <p>{playerResourceQuantity}</p>

              {id !== "adjacentDwelling" && (
                <p>{Math.ceil(playerResourceQuantity * points)}</p>
              )}
            </section>
          </div>
        );
      })}
    </Container>
  );
};
export default Resources;
