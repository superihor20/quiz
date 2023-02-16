import { Typography } from 'antd';
import styled from 'styled-components';

export type TitleStyledProps = {
  align?: 'left' | 'center' | 'right';
};

const { Title } = Typography;

export const TitleStyled = styled(Title)<TitleStyledProps>`
  text-align: ${({ align = 'left' }) => align};
`;
