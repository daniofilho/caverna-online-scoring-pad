import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.color};
  box-shadow: 0px -8px 10px -5px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  p {
    flex: 1;
    font-weight: bold;
    color: ${({ theme }) => theme.highlight.color};
    text-align: center;
  }

  button {
    flex: 1;
    width: 100%;
  }
`;
