import produce from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '@/api/types';
import { localStorageKeys } from '@/enums/local-storage-keys';

export type UserStore = {
  accessToken: null | string;
  user: null | User;
  setAccessToken: (accessToken: UserStore['accessToken']) => void;
  setUser: (user: UserStore['user']) => void;
};

export const userStore = create(
  persist<UserStore>(
    (set) => ({
      accessToken: null,
      user: null,
      setAccessToken: (accessToken) =>
        set(
          produce((state) => {
            state.accessToken = accessToken;
          }),
        ),
      setUser: (user) =>
        set(
          produce((state) => {
            state.user = user;
          }),
        ),
    }),
    {
      name: localStorageKeys.USER,
    },
  ),
);
