import { post, get } from '@/http/request';

// 登录需要的参数
export type LoginRequest = {
  username: string;
  password: string;
};
// 刷新登录信息需要的参数
export type reLoginRequest = {
  accessToken: string;
};
// 登录返回的参数
export type LoginResponse = {
  username: string;
  roles: string[];
  accessToken: string;
};

/**
 * 用户登录接口
 * @param data 登录需要的参数
 * @returns 
 */
export const userLogin = async (data?: LoginRequest) => {
  return post<LoginResponse>({}, '/login', data);
};

/**
 * 刷新登录信息接口
 * @param data 刷新登录信息需要的参数
 * @returns 
 */
export const refreshUserInfo = async (data?: reLoginRequest) => {
  return post<LoginResponse>({}, '/getUserInfo', data);
};
