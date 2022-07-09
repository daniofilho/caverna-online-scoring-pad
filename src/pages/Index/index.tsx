import { GiMeeple, GiPartyPopper, GiCheckeredFlag } from "react-icons/gi";
import Avatar from "react-nice-avatar";

import { useTranslation } from "next-i18next";

import { Button } from "@chakra-ui/react";

import { useCalculator } from "hooks/useCalculator";
import { useRouterMiddleware } from "hooks/useRouterMiddleware";

import { Container, PlayersBoard, PlayerRow } from "./styles";

const Index: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo } = useRouterMiddleware();

  const { players, addNewPlayer } = useCalculator();

  return (
    <Container>
      {players.length > 0 && (
        <PlayersBoard>
          <PlayerRow>
            <GiMeeple />

            <div />

            <GiCheckeredFlag />
          </PlayerRow>

          {players.map(({ id, name, totalScore, avatar }, index) => (
            <PlayerRow key={id} onClick={() => navigateTo(`/player/${id}`)}>
              <Avatar
                {...avatar}
                style={{ width: "1.5rem", height: "1.5rem" }}
              />

              <p>
                <strong>{name}</strong> {index === 0 && <GiPartyPopper />}
              </p>

              <p>{totalScore}</p>
            </PlayerRow>
          ))}
        </PlayersBoard>
      )}

      <Button type="button" onClick={() => addNewPlayer()}>
        {t("common:add-player")}
      </Button>
    </Container>
  );
};

export default Index;
