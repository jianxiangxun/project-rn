import request from '@/utils/request';
import { obj2formdata, searchParams } from '@/utils/utils';

// 业务管理-业务历史记录-列表
export async function query(params) {
  return request('/cats', {
    method: 'GET',
    // body: obj2formdata(params),
  });
}
// 业务管理-业务历史记录-列表
export async function userQuery(params) {
  return request('/userManagement/query', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 业务管理-业务历史记录-查询当前机构
export async function queryOrgName() {
  return request('/userManagement/currentOrgName', {
    method: 'POST',
  });
}
// 业务管理-业务历史记录-角色列表
export async function queryRoleList() {
  return request('/userManagement/roleList', {
    method: 'POST',
  });
}
// 业务管理-业务历史记录-添加用户
export async function addUser(params) {
  return request('/userManagement/createUser', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 业务管理-业务历史记录-修改用户
export async function updateUser(params) {
  return request('/userManagement/updateUser', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 业务管理-业务历史记录-修改密码
export async function resetPwd(params) {
  return request('/userManagement/resetPwd', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 业务管理-业务历史记录-启用
export async function openUser(params) {
  return request('/userManagement/openUser', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 业务管理-业务历史记录-停用
export async function deleteUser(params) {
  return request('/userManagement/deleteUser', {
    method: 'POST',
    body: obj2formdata(params),
  });
}

// 业务管理-业务历史记录-单条
export async function querySingle(params) {
  return request('/recordReport/query-single', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 业务管理-业务历史记录-批量
export async function queryBatch(params) {
  return request('/recordReport/query-batch', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
// 业务管理-业务历史记录-审核意见
export async function opinion(params) {
  return request('/commentReport/queryReport', {
    method: 'POST',
    body: obj2formdata(params),
  });
}
