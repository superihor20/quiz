import { StorageValue } from 'zustand/middleware';

import { UserStore } from '@/stores/user/user.store';

export type UserLocalStorage = StorageValue<Pick<UserStore, 'user' | 'accessToken'>>;
