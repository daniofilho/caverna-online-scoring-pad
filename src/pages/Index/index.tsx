import { GiMeeple, GiPartyPopper, GiCheckeredFlag } from "react-icons/gi";
import { HiChevronRight } from "react-icons/hi";

import { useTranslation } from "next-i18next";

import { Button } from "@chakra-ui/react";

import TopHeader from "components/molecule/TopHeader";

import { UseCalculatorProvider, useCalculator } from "./hooks/useCalculator";
import { Container, PlayersBoard, PlayerRow, MainContainer } from "./styles";

const Index: React.FC = () => {
  const { t } = useTranslation();

  const { players, addNewPlayer, startNewGame } = useCalculator();

  return (
    <MainContainer>
      <TopHeader />

      <Container>
        {players.length > 0 && (
          <PlayersBoard>
            <PlayerRow>
              <GiMeeple />

              <GiCheckeredFlag />

              <div />
            </PlayerRow>

            {players.map(({ id, name, totalScore }, index) => (
              <PlayerRow key={id} type="button">
                <p>
                  <strong>{name}</strong> {index === 0 && <GiPartyPopper />}
                </p>

                <p>{totalScore}</p>

                <HiChevronRight />
              </PlayerRow>
            ))}
          </PlayersBoard>
        )}

        <Button type="button" onClick={() => addNewPlayer()}>
          {t("common:add-player")}
        </Button>
      </Container>

      <footer>
        <Button
          type="button"
          colorScheme="telegram"
          onClick={() => startNewGame()}
        >
          {t("common:new-game")}
        </Button>
      </footer>
    </MainContainer>
  );
};

const IndexWrapper: React.FC = () => (
  <UseCalculatorProvider>
    <Index />
  </UseCalculatorProvider>
);
export default IndexWrapper;
