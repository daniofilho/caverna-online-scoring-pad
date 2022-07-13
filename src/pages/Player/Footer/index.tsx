import { useMemo } from "react";

import { useTranslation } from "next-i18next";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import templateLiteralsToHTML from "utils/templateLiteralToHTML";

import { useCalculator } from "hooks/useCalculator";

import { Container, LogContainer } from "./styles";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { selectedPlayer } = useCalculator();

  const pointsLabel = useMemo(() => {
    if (!selectedPlayer) return "";

    const score = selectedPlayer.totalScore;
    return score === 1
      ? `1 ${t("common:point")}`
      : `${score} ${t("common:points")}`;
  }, [selectedPlayer, t]);

  if (!selectedPlayer) return <></>;

  return (
    <>
      <Container>
        {selectedPlayer && <p>{pointsLabel}</p>}

        <Button type="button" colorScheme="gray" onClick={() => onOpen()}>
          {t("common:see-log")}
        </Button>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalHeader />

          <ModalBody>
            <h2>{t("common:score-calculation-log")}</h2>

            <LogContainer>
              {templateLiteralsToHTML(selectedPlayer.scoreLog)}
            </LogContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Footer;
