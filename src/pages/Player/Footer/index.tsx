import { useMemo } from "react";

import { useTranslation } from "next-i18next";

import { Button } from "@chakra-ui/react";

import { useCalculator } from "hooks/useCalculator";
import { useRouterMiddleware } from "hooks/useRouterMiddleware";

import { Container } from "./styles";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo } = useRouterMiddleware();

  const { selectedPlayer } = useCalculator();

  const pointsLabel = useMemo(() => {
    if (!selectedPlayer) return "";

    const score = selectedPlayer.totalScore;
    return score === 1
      ? `1 ${t("common:point")}`
      : `${score} ${t("common:points")}`;
  }, [selectedPlayer, t]);

  return (
    <Container>
      {selectedPlayer && <p>{pointsLabel}</p>}

      <Button
        type="button"
        colorScheme="telegram"
        onClick={() => navigateTo("/")}
      >
        {t("common:conclude")}
      </Button>
    </Container>
  );
};
export default Footer;
