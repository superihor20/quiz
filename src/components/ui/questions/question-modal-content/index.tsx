import { Radio, Typography } from 'antd';

import { Title } from '@/ui/title';

import { TextWrapper } from './question-modal-content.styled';

import type { RadioChangeEvent } from 'antd';

const marks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type QuestionModalContentProps = React.FC<{
  mark: number | null;
  helpDescription: string | null;
  onChange: (e: RadioChangeEvent) => void;
}>;

export const QuestionModalContent: QuestionModalContentProps = ({
  mark,
  helpDescription,
  onChange,
}) => {
  return (
    <>
      <TextWrapper>
        <Typography.Text>0 - you don&apos;t even hear about this;</Typography.Text>
        <br />
        <Typography.Text>
          5 - you read about it but it&apos;s hard to use or explain to anyone about it;
        </Typography.Text>
        <br />
        <Typography.Text>
          10 - you know a lot about it, have an experience using it and can explain to another
          person how it works.
        </Typography.Text>
      </TextWrapper>
      {helpDescription && (
        <>
          <TextWrapper>
            <Title level={5}>Help questions</Title>
            <pre>{helpDescription}</pre>
          </TextWrapper>
        </>
      )}
      <Radio.Group onChange={onChange} defaultValue={mark} value={mark}>
        {marks.map((currentMark) => (
          <Radio.Button value={currentMark} key={currentMark}>
            {currentMark}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
};
