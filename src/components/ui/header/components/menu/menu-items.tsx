import { MenuProps } from 'antd';
import Link from 'next/link';

import { pages } from '@/constants/links';

export const items: MenuProps['items'] = [
  {
    key: '1',
    label: <Link href={pages.dashboard}>Dashboard</Link>,
  },
];
