import request from '@/utils/request';
import { obj2formdata } from '@/utils/utils';

// 系统管理-用户管理-列表
export async function userQuery(params) {
  return request('/userManagement/query', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 系统管理-用户管理-查询当前机构
export async function queryOrgName() {
  return request('/userManagement/currentOrgName', {
    method: 'POST',
  });
}
// 系统管理-用户管理-角色列表
export async function queryRoleList() {
  return request('/userManagement/roleList', {
    method: 'POST',
  });
}
// 系统管理-用户管理-添加用户
export async function addUser(params) {
  return request('/userManagement/createUser', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 系统管理-用户管理-修改用户
export async function updateUser(params) {
  return request('/userManagement/updateUser', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 系统管理-用户管理-修改密码
export async function resetPwd(params) {
  return request('/userManagement/resetPwd', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 系统管理-用户管理-启用
export async function openUser(params) {
  return request('/userManagement/openUser', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 系统管理-用户管理-停用
export async function deleteUser(params) {
  return request('/userManagement/deleteUser', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
