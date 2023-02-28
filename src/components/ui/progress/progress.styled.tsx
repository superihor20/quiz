import styled from 'styled-components';

export const ProgressWrapper = styled.div`
  max-width: 250px;
  width: 100%;

  .custom-line {
    margin-bottom: 0;
  }

  .custom-outer {
    padding-inline-end: calc(4em + 8px) !important;
    margin-inline-end: calc(-4em - 8px) !important;
  }

  .custom-text {
    width: 4em;
  }
`;
