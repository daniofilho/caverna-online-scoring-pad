import { useTranslation } from "next-i18next";

import { Button } from "@chakra-ui/react";

import { useCalculator } from "hooks/useCalculator";

import { Container } from "./styles";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { startNewGame } = useCalculator();

  return (
    <Container>
      <Button
        type="button"
        colorScheme="telegram"
        onClick={() => startNewGame()}
      >
        {t("common:new-game")}
      </Button>
    </Container>
  );
};
export default Footer;
