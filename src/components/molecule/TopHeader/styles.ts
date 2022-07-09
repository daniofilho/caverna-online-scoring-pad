import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.primary.color};

  position: sticky;
  top: 0;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0.5rem;

    & > button {
      background-color: transparent;
      border-width: 0;
      padding: 0.5rem;
      color: ${({ theme }) => theme.primary.contrast};

      width: 2rem;

      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    & > button:nth-last-of-type(1) {
      svg {
        color: ${({ theme }) =>
          theme.name === "dark"
            ? theme.highlight.color
            : theme.primary.contrast};
      }
    }

    h1 {
      color: ${({ theme }) => theme.primary.contrast};
      font-size: 1.2rem;
      margin: 0;
    }
  }
`;

export const DrawerContainer = styled.div`
  .chakra-slide.chakra-modal__content {
    background-color: ${({ theme }) => theme.background.color} !important;
  }

  .chakra-modal__close-btn {
    border-width: 0;
  }

  .chakra-modal__body {
    padding-top: 4rem;
  }

  .chakra-modal__footer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      text-align: center;
    }
  }

  a,
  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    line-height: 1.1rem;
    color: ${({ theme }) => theme.background.contrast};
    text-decoration: none;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;
