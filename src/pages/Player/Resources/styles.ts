import styled from "styled-components";

export const Container = styled.div`
  & > div:nth-of-type(1) {
    svg {
      color: ${({ theme }) => theme.highlight.color};
    }
  }

  & > div {
    display: grid;
    grid-template-columns: 2rem 1fr 2rem 2rem;
    align-items: center;
    gap: 1rem;

    padding: 0;

    p {
      margin: 0;
    }
  }

  & > div.last {
    border-bottom: 2px solid var(--chakra-colors-chakra-border-color);
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .chakra-slider__thumb {
    border: 1px solid #efefef;
  }
`;
