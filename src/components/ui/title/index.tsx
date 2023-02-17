import { TitleProps as AntdTitleProps } from 'antd/es/typography/Title';

import { TitleStyled, TitleStyledProps } from './title.styled';

import { ComponentWithChildren } from '@/types/component-with-children';

type TitleProps = ComponentWithChildren<TitleStyledProps & AntdTitleProps>;

export const Title: TitleProps = ({ children, align = 'left', ...antdTitleProps }) => {
  return (
    <TitleStyled align={align} {...antdTitleProps}>
      {children}
    </TitleStyled>
  );
};
