import { grey } from '@ant-design/colors';
import styled from 'styled-components';

type ButtonPositions = 'left' | 'center' | 'right';

export type ButtonStyledProps = {
  disabled?: boolean;
  position?: ButtonPositions;
};

const buttonPositions: Record<ButtonPositions, string> = {
  left: '0 auto 0 0',
  center: '0 auto',
  right: '0 0 0 auto',
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-block;
  border: none;
  background: #fff;
  color: ${grey[9]};
  border-radius: 5px;
  padding: 0.7em 2em;
  cursor: pointer;
  transition: all 0.3s;
  margin: ${({ position = 'center' }) => buttonPositions[position]};

  &:hover {
    box-shadow: 0px 0px 20px 4px rgb(196 29 127 / 50%);
  }
`;
