import { Typography } from 'antd';
import { TitleProps as TitlePropsAntd } from 'antd/es/typography/Title';

import { ComponentWithChildren } from '../../../types/component-with-children';

import classes from './styles.module.css';

const { Title: TitleAntd } = Typography;

type TitleProps = ComponentWithChildren<
  { position?: 'left' | 'center' | 'right' } & TitlePropsAntd
>;

export const Title: TitleProps = ({ children, position = 'left', ...antdTitleProps }) => {
  return (
    <TitleAntd className={`${classes[position]}`} {...antdTitleProps}>
      {children}
    </TitleAntd>
  );
};
