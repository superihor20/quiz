import Title from 'antd/es/typography/Title';
import styled from 'styled-components';

export type TitleStyledProps = {
  align?: 'left' | 'center' | 'right';
};

export const TitleStyled = styled(Title)<TitleStyledProps>`
  text-align: ${({ align = 'left' }) => align};
`;
