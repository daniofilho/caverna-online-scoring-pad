import { useCalculator } from "hooks/useCalculator";

import Loader from "components/atom/Loader";

import Constructions from "./Constructions";
import Information from "./Information";
import Resources from "./Resources";
import { Container } from "./styles";

const PlayerPage: React.FC = () => {
  const { selectedPlayer } = useCalculator();

  if (!selectedPlayer) return <Loader />;

  return (
    <Container>
      <Information />

      <Constructions color="orange" />
      <Constructions color="green" />
      <Constructions color="yellow" />

      <Resources />
    </Container>
  );
};
export default PlayerPage;
