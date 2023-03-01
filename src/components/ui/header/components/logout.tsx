import { Typography } from 'antd';
import { useRouter } from 'next/router';

import { pages } from '@/constants/links';
import { getMultipleStoreFields } from '@/stores/selector';
import { userStore } from '@/stores/user/user.store';

export const Logout = () => {
  const router = useRouter();
  const { setAccessToken, setUser } = userStore(
    getMultipleStoreFields(['setUser', 'setAccessToken']),
  );

  const handleClick = () => {
    setAccessToken(null);
    setUser(null);
    router.push(pages.signIn);
  };

  return <Typography.Text onClick={handleClick}>Logout</Typography.Text>;
};
