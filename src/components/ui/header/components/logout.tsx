import { Typography } from 'antd';
import { useRouter } from 'next/router';

import { pages } from '@/constants/links';
import { localStorageKeys } from '@/enums/local-storage-keys';
import { useLocalStorage } from '@/hooks/use-local-storage';

export const Logout = () => {
  const router = useRouter();
  const [, setAccessToken] = useLocalStorage(localStorageKeys.ACCESS_TOKEN);

  const handleClick = () => {
    setAccessToken(null);
    router.push(pages.signIn);
  };

  return <Typography.Text onClick={handleClick}>Logout</Typography.Text>;
};
