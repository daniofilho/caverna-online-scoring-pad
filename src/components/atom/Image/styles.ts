import styled from 'styled-components';

export const Container = styled.div``;

interface INativeContainerProps {
  width: number;
  height: number;
}

export const NativeImageContainer = styled.div<INativeContainerProps>`
  img {
    width: ${({ width }) => `${width}px` || '100%'};
    height: ${({ height }) => `${height}px` || 'auto'};
  }
`;
