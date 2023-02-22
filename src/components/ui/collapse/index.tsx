import { Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';

import { ComponentWithChildren } from '@/types/component-with-children';

import { Action, CollapseOuterWrapper, HeaderRightPart } from './collapse.styled';
import { Content } from './components/content';
import { Header } from './components/header';

type CollapseProps = ComponentWithChildren<{
  title: string;
  headerAdditionalContent?: React.ReactNode;
}>;

export const Collapse: CollapseProps = ({ title, headerAdditionalContent, children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = useRef<number>(0);

  const toggleCollapse = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const contentHtml = contentRef.current;
    contentHeight.current = contentHtml?.getBoundingClientRect().height ?? 0;
  }, []);

  return (
    <CollapseOuterWrapper>
      <Header onClick={toggleCollapse}>
        <Typography.Text>{title}</Typography.Text>
        <HeaderRightPart>
          {headerAdditionalContent && headerAdditionalContent}
          <Action>{isOpened ? '-' : '+'}</Action>
        </HeaderRightPart>
      </Header>
      <Content height={isOpened ? contentHeight.current : 0} ref={contentRef}>
        {children}
      </Content>
    </CollapseOuterWrapper>
  );
};
