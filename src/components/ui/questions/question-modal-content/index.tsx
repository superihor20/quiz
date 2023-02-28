import { Radio, Typography } from 'antd';

import { TextWrapper } from './question-modal-content.styled';

import type { RadioChangeEvent } from 'antd';

const marks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type QuestionModalContentProps = React.FC<{
  mark: number | null;
  onChange: (e: RadioChangeEvent) => void;
}>;

export const QuestionModalContent: QuestionModalContentProps = ({ mark, onChange }) => {
  return (
    <>
      <TextWrapper>
        <Typography.Text>
          0 - you don&apos;t even hear about this feature | library | framework;
        </Typography.Text>
        <br />
        <Typography.Text>
          5 - you have read about it and know how to use it, work with it;
        </Typography.Text>
        <br />
        <Typography.Text>
          10 - you know a lot about it, have an experience using it and can explain to another
          person how it works.
        </Typography.Text>
      </TextWrapper>
      <Radio.Group onChange={onChange} defaultValue={mark} value={mark}>
        {marks.map((mark) => (
          <Radio.Button value={mark} key={mark}>
            {mark}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
};
