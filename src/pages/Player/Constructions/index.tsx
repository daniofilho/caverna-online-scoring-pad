import ScrollContainer from "react-indiana-drag-scroll";

import { useCalculator } from "hooks/useCalculator";

import constructions from "config/constructions";

import Construction from "./Construction";
import { Container, Divider } from "./styles";

interface IConstructionsProps {
  color: string;
}

const Constructions: React.FC<IConstructionsProps> = ({ color }) => {
  const { selectedPlayer } = useCalculator();
  const filteredConstructions = constructions.filter((o) => o.color === color);

  if (!selectedPlayer) return <></>;

  return (
    <>
      <ScrollContainer vertical={false}>
        <Container>
          {filteredConstructions.map((construction, index) => {
            const playerHasConstruction = selectedPlayer.constructions.find(
              (o) => o.id === construction.id
            );

            return (
              <Construction
                key={index}
                isActive={!!playerHasConstruction}
                construction={construction}
              />
            );
          })}
        </Container>
      </ScrollContainer>

      <Divider />
    </>
  );
};
export default Constructions;
