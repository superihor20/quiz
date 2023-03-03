import { red } from '@ant-design/colors';
import { Typography } from 'antd';
import styled from 'styled-components';

export const ErrorText = styled(Typography.Text)`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  font-size: 0.8em;
  color: ${red[5]};
`;
