import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3rem 4fr 1fr;
  gap: 1rem;

  margin-bottom: 1rem;
`;

export const AvatarButton = styled.button.attrs({
  type: "button",
})`
  background-color: transparent;
  border-width: 0;

  text-align: start;
`;
