import styled from 'styled-components';

export const FixedContainer = styled.div`
  width: calc(100% - 10px);
  background: var(--smoke-black);
  position: fixed;
  top: 0;
  z-index: 6;
  @media (max-width: 1080px) {
    z-index: 4;
  }
`;
