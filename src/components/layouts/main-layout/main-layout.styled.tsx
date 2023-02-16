import styled from 'styled-components';

import { darkColors } from '../../../utils/constans/colors';

export const MainLayoutStyled = styled.div`
  background: ${darkColors[500]};
  min-height: calc(100vh - 2em);
  width: calc(100% - 2em);
  padding: 1em;
`;
