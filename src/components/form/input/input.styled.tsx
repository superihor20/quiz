import { grey, red } from '@ant-design/colors';
import { Input, Typography } from 'antd';
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

export const ErrorText = styled(Typography.Text)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  font-size: 0.8em;
  color: ${red[5]};
`;
