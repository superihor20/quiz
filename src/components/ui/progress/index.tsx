import { geekblue, magenta, purple } from '@ant-design/colors';
import { Progress as ProgressAntd } from 'antd';

import { ProgressWrapper } from './progress.styled';

type ProgressProps = React.FC<{
  percent: number;
}>;

export const Progress: ProgressProps = ({ percent }) => {
  return (
    <ProgressWrapper>
      <ProgressAntd
        width={10}
        percent={percent}
        strokeColor={{
          '0%': magenta[5],
          '20%': geekblue[6],
          '50%': purple[4],
          '80%': geekblue[6],
          '100%': magenta[5],
        }}
        prefixCls="custom"
      />
    </ProgressWrapper>
  );
};
