import { useMemo } from "react";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Button } from "@chakra-ui/react";

import { useCalculator } from "hooks/useCalculator";
import getPlayerFinalScore from "hooks/useCalculator/services/getPlayerFinalScore";
import { useRouterMiddleware } from "hooks/useRouterMiddleware";

import { Container } from "./styles";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo } = useRouterMiddleware();

  const router = useRouter();

  const { getPlayer } = useCalculator();

  const player = useMemo(
    () => getPlayer(String(router.query.playerId)),
    [getPlayer, router]
  );

  const pointsLabel = useMemo(() => {
    if (!player) return "";

    const score = getPlayerFinalScore(player);
    return score === 1
      ? `1 ${t("common:point")}`
      : `${score} ${t("common:points")}`;
  }, [player, t]);

  return (
    <Container>
      {player && <p>{pointsLabel}</p>}

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
