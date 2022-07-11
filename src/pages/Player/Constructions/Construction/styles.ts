import { transparentize } from "polished";
import styled from "styled-components";

interface IContainerProps {
  color: "orange" | "green" | "yellow";
  isActive: boolean;
}

export const Container = styled.button.attrs({
  type: "button",
})<IContainerProps>`
  display: flex;
  flex-direction: column;

  width: 10rem;
  height: 10rem;

  border: 1px solid
    ${({ theme }) => transparentize(0.5, theme.background.contrast)};
  border-radius: 10px;
  overflow: hidden;
  padding: 0;

  opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};

  & > header {
    width: 100%;
    background-color: ${({ theme, color }) => theme[color]};
    padding: 0.5rem;

    height: 2rem;

    p {
      margin: 0;
      color: ${({ theme }) => theme.primary.color};

      font-size: 0.8rem;
      font-weight: bold;
    }
  }

  & > section {
    flex: 1;
    padding: 0.5rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    p {
      margin: 0;
      color: ${({ theme }) => theme.background.contrast};
      font-weight: bold;
    }
  }

  & > footer {
    padding: 0.5rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .score {
      opacity: 0.5;
    }

    .score:nth-last-of-type(1) {
      opacity: 1;
    }

    svg {
      color: ${({ theme }) => theme.background.contrast};
    }
  }
`;

export const Cost = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const Score = styled.div.attrs({
  style: {
    backgroundImage: "url('/images/score.png')",
  },
  className: "score",
})`
  width: 2rem;
  height: 2rem;
  background-size: cover;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.primary.color};
  font-weight: bold;
`;
