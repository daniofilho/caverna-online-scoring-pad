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
    font-weight: bold;
    color: ${({ theme }) => theme.highlight.color};
    text-align: center;
  }

  button {
    flex: 1;
    width: 100%;
  }
`;

export const LogContainer = styled.div`
  padding-bottom: 1.5rem;

  p {
    margin-bottom: 0.2rem;
    font-size: 0.9rem;
    border-bottom: 1px dashed var(--chakra-colors-chakra-border-color);

    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
  }

  hr {
    opacity: 0;
  }
`;
