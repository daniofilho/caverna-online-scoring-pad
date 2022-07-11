import { FaUserTimes } from "react-icons/fa";
import Avatar, { genConfig } from "react-nice-avatar";

import { useTranslation } from "next-i18next";

import { Button, Input } from "@chakra-ui/react";

import { useCalculator } from "hooks/useCalculator";

import { Container, AvatarButton } from "./styles";

const BasicInformation: React.FC = () => {
  const { t } = useTranslation();
  const { removePlayer, updatePlayerProp, selectedPlayer } = useCalculator();

  if (!selectedPlayer) return <></>;

  const { id: playerId, name, avatar } = selectedPlayer;

  return (
    <>
      <Container>
        <AvatarButton
          aria-label={t("common:change-avatar")}
          onClick={() =>
            updatePlayerProp({
              playerId,
              field: "avatar",
              value: genConfig(),
            })
          }
        >
          <Avatar {...avatar} style={{ width: "3rem", height: "3rem" }} />
        </AvatarButton>

        <Input
          value={name}
          onChange={(e) =>
            updatePlayerProp({
              playerId,
              field: "name",
              value: e.target.value,
            })
          }
        />

        <Button
          colorScheme="red"
          aria-label={t("common:delete-player")}
          onClick={() => removePlayer(playerId)}
        >
          <FaUserTimes />
        </Button>
      </Container>
    </>
  );
};
export default BasicInformation;
