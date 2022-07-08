import { BsTrash, BsPlusLg } from "react-icons/bs";
import { GiDiceFire } from "react-icons/gi";

import { useTranslation } from "next-i18next";

import { Button } from "@chakra-ui/react";

import TopHeader from "components/molecule/TopHeader";

import { UseCalculatorProvider, useCalculator } from "./hooks/useCalculator";
import { Container } from "./styles";

const Index: React.FC = () => {
  const { t } = useTranslation();

  const { players, addNewPlayer, removePlayer, startNewGame } = useCalculator();

  return (
    <>
      <TopHeader />

      <Container>
        <Button
          type="button"
          onClick={() => startNewGame()}
          leftIcon={<GiDiceFire />}
        >
          {t("common:new-game")}
        </Button>

        {players.length > 0 && (
          <>
            <h3>{t("common:players")}</h3>

            <ul>
              {players.map(({ id, name }) => (
                <li key={id}>
                  <p>{name}</p>

                  <button type="button" onClick={() => removePlayer(id)}>
                    <BsTrash />
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        <Button
          type="button"
          onClick={() => addNewPlayer()}
          leftIcon={<BsPlusLg />}
        >
          {t("common:add-player")}
        </Button>
      </Container>
    </>
  );
};

const IndexWrapper: React.FC = () => (
  <UseCalculatorProvider>
    <Index />
  </UseCalculatorProvider>
);
export default IndexWrapper;
