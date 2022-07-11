import styled from "styled-components";

export const Container = styled.div`
  & > div:nth-of-type(1) {
    svg {
      color: ${({ theme }) => theme.highlight.color};
    }
  }

  & > div {
    & > section {
      display: grid;
      grid-template-columns: 2rem 1fr 2rem 2rem;
      align-items: center;
      gap: 1rem;

      padding: 0;
    }

    p {
      margin: 0;
    }

    p:nth-last-of-type(1) {
      font-weight: bold;
    }
  }

  & > div.last {
    border-bottom: 2px solid var(--chakra-colors-chakra-border-color);
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .chakra-slider__thumb {
    border: 1px solid #efefef;
    width: 1.6rem;
    height: 1.6rem;
  }
`;
