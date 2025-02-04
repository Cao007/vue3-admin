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