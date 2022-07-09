import { FaUserTimes } from "react-icons/fa";
import Avatar, { genConfig } from "react-nice-avatar";

import { useTranslation } from "next-i18next";

import { Button, Input } from "@chakra-ui/react";

import { useCalculator } from "hooks/useCalculator";

import { Container, AvatarButton } from "./styles";

const BasicInformation: React.FC<IPlayerScore> = ({
  id: playerId,
  name,
  avatar,
}) => {
  const { t } = useTranslation();
  const { removePlayer, updatePlayerProp } = useCalculator();

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
          <Avatar {...avatar} style={{ width: "2.5rem", height: "2.5rem" }} />
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
