import { grey, red } from '@ant-design/colors';
import { Input } from 'antd';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputStyled = styled(Input)`
  background: ${grey[6]};
  border: 1px solid transparent;
  color: ${grey[0]};
  width: 100%;

  ::placeholder {
    color: ${grey[5]};
  }

  :focus {
    border-color: ${grey[0]};
  }

  :hover {
    border-color: ${grey[0]};
  }

  &.ant-input-status-error {
    border-color: ${red[5]}!important;
  }
`;
