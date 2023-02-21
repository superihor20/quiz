import { MenuOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import { useRouter } from 'next/router';

import { getMenuName } from '@/helpers/get-menu-name';

import { items } from './menu-items';

export const Menu = () => {
  const router = useRouter();

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button>
        {getMenuName(router.asPath)} <MenuOutlined />
      </Button>
    </Dropdown>
  );
};
