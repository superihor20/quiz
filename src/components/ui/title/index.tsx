import { TitleProps as AntdTitleProps } from 'antd/es/typography/Title';

import { ComponentWithChildren } from '../../../types/component-with-children';

import { TitleStyled, TitleStyledProps } from './title.styled';

type TitleProps = ComponentWithChildren<TitleStyledProps & AntdTitleProps>;

export const Title: TitleProps = ({ children, align = 'left', ...antdTitleProps }) => {
  return (
    <TitleStyled align={align} {...antdTitleProps}>
      {children}
    </TitleStyled>
  );
};
