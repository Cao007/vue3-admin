import { defineStore } from 'pinia';
import pinia from '@/store';
import { userLogin, refreshUserInfo } from '@/api/user';
import { IUserState, LoginRequest } from '@/store/user/types';

export const useUserStoreHook = defineStore('userInfo', {
  state: (): IUserState => ({
    username: 'admin',
    accessToken: '',
    roles: ['common'],
  }),
  getters: {},
  actions: {
    storeUserLogin(data: LoginRequest) {
      return userLogin(data).then((res) => {
        this.username = res.username;
        this.roles = res.roles;
        this.accessToken = res.accessToken;
        return res;
      });
    },
    storeRefreshUserInfo() {
      if (this.username == 'admin' && this.accessToken != '') {
        refreshUserInfo({
          accessToken: this.accessToken,
        })
          .then((res) => {
            this.username = res.username;
            this.roles = res.roles;
            this.accessToken = res.accessToken;
          })
          .catch(() => {
            this.accessToken = '';
          });
      }
    },
  },
  persist: {
    key: 'userInfo',
    storage: sessionStorage,
    pick: ['accessToken'],
  },
});
export function useUserStore() {
  return useUserStoreHook(pinia);
}
