import { grey } from '@ant-design/colors';
import styled from 'styled-components';

export type PaperStyledProps = {
  maxWidth?: number;
  bg?: string;
};

export const PaperStyled = styled.div<PaperStyledProps>`
  max-width: ${({ maxWidth = 450 }) => `${maxWidth}px`};
  width: 100%;
  margin: 1em auto;
  background: ${({ bg = grey[7] }) => bg};
  border-radius: 10px;
  padding: 2em;
`;
