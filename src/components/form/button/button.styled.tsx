import { grey } from '@ant-design/colors';
import styled from 'styled-components';

export type ButtonStyledProps = {
  disabled?: boolean;
};

export const ButtonStyled = styled.button`
  border: none;
  background: #fff;
  color: ${grey[9]};
  border-radius: 5px;
  padding: 0.7em 2em;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 20px 4px rgb(196 29 127 / 50%);
  }
`;
