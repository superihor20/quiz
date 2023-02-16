import { Typography } from 'antd';
import { TitleProps as TitlePropsAntd } from 'antd/es/typography/Title';

import { ComponentWithChildren } from '../../../types/component-with-children';

const { Title: TitleAntd } = Typography;

type TitleProps = ComponentWithChildren<
  { position?: 'left' | 'center' | 'right' } & TitlePropsAntd
>;

export const Title: TitleProps = ({ children, position = 'left', ...antdTitleProps }) => {
  return <TitleAntd {...antdTitleProps}>{children}</TitleAntd>;
};
