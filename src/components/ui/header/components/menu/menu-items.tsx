import {
  DashboardOutlined,
  LogoutOutlined,
  QuestionOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import Link from 'next/link';

import { pages } from '@/constants/links';

import { Logout } from '../logout';

export const items: MenuProps['items'] = [
  {
    key: 'Dashboard',
    label: <Link href={pages.dashboard}>Dashboard</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: 'Questions',
    label: <Link href={pages.questions}>Questions</Link>,
    icon: <QuestionOutlined />,
  },
  {
    key: 'Settings',
    label: <Link href={pages.settings}>Settings</Link>,
    icon: <SettingOutlined />,
  },
  {
    key: 'Logout',
    label: <Logout />,
    icon: <LogoutOutlined />,
  },
];
