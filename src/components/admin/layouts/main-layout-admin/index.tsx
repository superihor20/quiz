import { BookOutlined } from '@ant-design/icons';
import { MenuProps, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  ContentLayoutStyled,
  ContentStyled,
  ContentWrapper,
  FooterStyled,
  LayoutStyled,
} from './main-layout-admin.styled';

import { adminPages } from '@/constants/links';
import { getBreadcrumbValues } from '@/helpers/get-breadcrumb-values';
import { ComponentWithChildren } from '@/types/component-with-children';
import { Breadcrumb } from '@/ui/breadcrumb';

const { Sider } = Layout;

const menuItems: MenuProps['items'] = [
  {
    key: adminPages.questionsCategories,
    label: <Link href={adminPages.questionsCategories}>Questions Categories</Link>,
    icon: <BookOutlined />,
  },
];

export const MainLayoutAdmin: ComponentWithChildren = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const breadcrumbItems = getBreadcrumbValues(router.pathname).filter(Boolean);

  return (
    <LayoutStyled>
      <ContentStyled>
        <Breadcrumb items={breadcrumbItems} />
        <ContentLayoutStyled style={{ background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={220}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[adminPages.questionsCategories]}
              style={{ height: '100%' }}
              items={menuItems}
            />
          </Sider>
          <ContentWrapper>{children}</ContentWrapper>
        </ContentLayoutStyled>
      </ContentStyled>
      <FooterStyled>Ihor Naidonov ©2023 Created by Ihor Naidonov</FooterStyled>
    </LayoutStyled>
  );
};
