import { Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/router';

import { getBreadcrumbValues } from '@/helpers/get-breadcrumb-values';
import { ComponentWithChildren } from '@/types/component-with-children';
import { Breadcrumb } from '@/ui/breadcrumb';

import {
  ContentLayoutStyled,
  ContentStyled,
  ContentWrapper,
  FooterStyled,
  LayoutStyled,
} from './main-layout-admin.styled';
import { menuItems } from './menu-items';

const { Sider } = Layout;

export const MainLayoutAdmin: ComponentWithChildren = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const breadcrumbItems = getBreadcrumbValues(router.pathname);

  return (
    <main>
      <LayoutStyled>
        <ContentStyled>
          <Breadcrumb items={breadcrumbItems} />
          <ContentLayoutStyled style={{ background: colorBgContainer }}>
            <Sider style={{ background: colorBgContainer }} width={220}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[router.pathname]}
                style={{ height: '100%' }}
                items={menuItems}
              />
            </Sider>
            <ContentWrapper>{children}</ContentWrapper>
          </ContentLayoutStyled>
        </ContentStyled>
        <FooterStyled>Ihor Naidonov ©2023 Created by Ihor Naidonov</FooterStyled>
      </LayoutStyled>
    </main>
  );
};
