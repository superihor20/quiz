import { grey } from '@ant-design/colors';
import { Typography } from 'antd';
import styled from 'styled-components';

export const CollapseOuterWrapper = styled.div`
  background: ${grey[7]};
  border-radius: 10px;
`;

export const HeaderRightPart = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;

  & .ant-progress {
    margin: 0 !important;
  }
`;

export const Action = styled(Typography.Text)`
  width: 10px;
`;
