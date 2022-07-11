import { useMemo } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { useTranslation } from "next-i18next";

import { useCalculator } from "hooks/useCalculator";

import Image from "components/atom/Image";

import { Container, Cost, Score } from "./styles";

interface IConstructionProps {
  isActive: boolean;
  construction: IConstruction;
}

interface ICostProp {
  key: string;
  value: number;
}

const Construction: React.FC<IConstructionProps> = ({
  construction,
  isActive,
}) => {
  const { id, cost, color, scoreLabel, score } = construction;
  const { t } = useTranslation();
  const { selectedPlayer, togglePlayerConstruction } = useCalculator();

  const costAsArray = useMemo(() => {
    const costs: ICostProp[] = [];
    Object.entries(cost).forEach(([key, value]) => costs.push({ key, value }));

    return costs;
  }, [cost]);

  if (!selectedPlayer) return <></>;

  return (
    <div>
      <Container
        color={color}
        isActive={isActive}
        onClick={() =>
          togglePlayerConstruction({
            playerId: selectedPlayer.id,
            construction,
          })
        }
      >
        <header>
          <p>{t(`constructions:${id}`)}</p>
        </header>

        <section>
          {costAsArray.map(({ key, value }) => (
            <Cost key={key}>
              <Image
                src={`/images/resources/${key}.png`}
                width={30}
                height={30}
              />

              <p>{value}</p>
            </Cost>
          ))}
        </section>

        <footer>
          <Score>{scoreLabel}</Score>

          {isActive && (
            <>
              <HiArrowNarrowRight />

              <Score>{score(selectedPlayer)}</Score>
            </>
          )}
        </footer>
      </Container>
    </div>
  );
};
export default Construction;
