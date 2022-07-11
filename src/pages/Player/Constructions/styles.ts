import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Divider = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid
    ${({ theme }) => transparentize(0.8, theme.background.contrast)};
`;
