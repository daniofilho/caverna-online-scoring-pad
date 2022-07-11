import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4rem 4fr 1fr;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid
    ${({ theme }) => transparentize(0.8, theme.background.contrast)};

  input {
    border-color: ${({ theme }) =>
      transparentize(0.6, theme.background.contrast)};
  }
`;

export const AvatarButton = styled.button.attrs({
  type: "button",
})`
  background-color: transparent;
  border-width: 0;

  text-align: start;
`;
