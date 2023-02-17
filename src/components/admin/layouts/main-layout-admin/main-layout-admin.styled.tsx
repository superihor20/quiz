import { Layout } from 'antd';
import styled from 'styled-components';

export const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`;

export const ContentStyled = styled(Layout.Content)`
  padding: 0 50px;
  max-width: 1280px;
  align-self: center;
  width: 100%;
`;

export const ContentLayoutStyled = styled(Layout)`
  padding: 1em;
`;

export const ContentWrapper = styled(Layout.Content)`
  min-height: 280px;
  padding: 0 0 0 1em;
`;

export const FooterStyled = styled(Layout.Footer)`
  text-align: center;
`;
