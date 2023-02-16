import { grey } from '@ant-design/colors';
import { Divider, Typography } from 'antd';
import styled from 'styled-components';

export const DividerStyled = styled(Divider)`
  background: ${grey[6]};
`;

export const Text = styled(Typography.Text)`
  text-align: center;
  display: block;
`;
