import styled from "styled-components";

export const MainContainer = styled.article`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;

  button {
    width: 100%;
  }

  & > footer {
    position: sticky;
    bottom: 0;

    padding: 1rem;
  }
`;

export const Container = styled.div`
  flex: 1;
  padding: 1rem;
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
})`
  background-color: transparent;
  border-width: 0;

  display: grid;
  grid-template-columns: 1fr 3rem 1rem;
  align-items: center;

  margin-bottom: 0.5rem;
  border-bottom: 1px dashed ${({ theme }) => theme.primary.color};

  padding: 0.5rem;

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

  p:nth-of-type(2) {
    padding-left: 0.4rem;
  }
`;
