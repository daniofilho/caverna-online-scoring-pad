import styled from "styled-components";

export const MainContainer = styled.article`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;

  & > footer {
    position: sticky;
    bottom: 0;
    z-index: 10;
  }
`;

export const Container = styled.div`
  flex: 1;
  padding: 1rem;
`;
