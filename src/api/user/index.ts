import { post, get } from '@/http/request';
import { LoginRequest, LoginResponse, reLoginRequest } from './types';

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
