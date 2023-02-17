import { ComponentWithChildren } from '@/types/component-with-children';

import { ButtonStyled, ButtonStyledProps } from './button.styled';

type ButtonProps = ComponentWithChildren<
  {
    htmlType?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
  } & ButtonStyledProps
>;

export const Button: ButtonProps = ({
  children,
  htmlType = 'button',
  onClick,
  ...buttonStyledProps
}) => {
  return (
    <ButtonStyled type={htmlType} onClick={onClick} {...buttonStyledProps}>
      {children}
    </ButtonStyled>
  );
};
