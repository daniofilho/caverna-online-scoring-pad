/* eslint-disable no-nested-ternary */
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
  const filteredConstructions = constructions().filter(
    (o) => o.color === color
  );

  const orderedConstructions = filteredConstructions.sort((a, b) => {
    const fa = a.label.toLowerCase();
    const fb = b.label.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  console.log(orderedConstructions);

  if (!selectedPlayer) return <></>;

  return (
    <>
      <ScrollContainer vertical={false}>
        <Container>
          {orderedConstructions.map((construction, index) => {
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
