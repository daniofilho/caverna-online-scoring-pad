import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 100%;
  }
`;

export const PlayersBoard = styled.section`
  margin: 0 0 1rem 0;

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
  }

  button.player-row:nth-of-type(1) {
    border-style: solid;
  }
  button.player-row:nth-last-of-type(1) {
    border-width: 0;
  }
`;

export const PlayerRow = styled.button.attrs({
  className: "player-row",
  type: "button",
})`
  background-color: transparent;
  border-width: 0;

  display: grid;
  grid-template-columns: 2rem 1fr 3rem;
  align-items: center;

  margin-bottom: 0.5rem;
  border-bottom: 1px dashed ${({ theme }) => theme.primary.color};

  padding: 0.5rem;
  text-align: start;

  svg {
    width: 1rem;
    height: 1rem;
  }

  p {
    margin: 0;
    text-align: left;

    svg {
      color: ${({ theme }) => theme.highlight.color};
    }
  }

  & > svg:nth-of-type(2) {
    margin-left: auto;
  }

  & > p:nth-of-type(2) {
    text-align: right;
  }
`;
