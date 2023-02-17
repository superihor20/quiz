import { BookOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import Link from 'next/link';

import { adminPages } from '@/constants/links';

export const menuItems: MenuProps['items'] = [
  {
    key: adminPages.questionsCategories,
    label: <Link href={adminPages.questionsCategories}>Questions Categories</Link>,
    icon: <BookOutlined />,
  },
  {
    key: adminPages.questions,
    label: <Link href={adminPages.questions}>Questions</Link>,
    icon: <BookOutlined />,
  },
];
