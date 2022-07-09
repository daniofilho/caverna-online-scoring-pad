import { useMemo } from "react";

import { useRouter } from "next/router";

import { useCalculator } from "hooks/useCalculator";

import Loader from "components/atom/Loader";

import Information from "./Information";
import Resources from "./Resources";
import { Container } from "./styles";

const PlayerPage: React.FC = () => {
  const router = useRouter();

  const { getPlayer } = useCalculator();

  const player = useMemo(
    () => getPlayer(String(router.query.playerId)),
    [getPlayer, router]
  );

  if (!player) return <Loader />;

  return (
    <Container>
      <Information {...player} />

      <Resources {...player} />
    </Container>
  );
};
export default PlayerPage;
