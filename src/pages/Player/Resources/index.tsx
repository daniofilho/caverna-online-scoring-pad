import React from "react";
import { GiCheckeredFlag, GiInfinity } from "react-icons/gi";

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

const Resources: React.FC<IPlayerScore> = ({ id: playerId }) => {
  const { updatePlayerResource, getPlayerResource } = useCalculator();

  return (
    <Container>
      <div>
        <div />
        <div />
        <GiInfinity />
        <GiCheckeredFlag />
      </div>

      {resources.map(
        ({ id, points, maxQuantity, minQuantity, type }, index) => {
          const playerResourceQuantity = getPlayerResource(playerId, id);

          return (
            <div
              key={id}
              className={`${
                type !== resources[index + 1]?.type ? "last" : ""
              } `}
            >
              <Image
                src={`/images/resources/${id}.png`}
                alt={id}
                width={40}
                height={40}
              />

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

              <p>{playerResourceQuantity * points}</p>
            </div>
          );
        }
      )}
    </Container>
  );
};
export default Resources;
