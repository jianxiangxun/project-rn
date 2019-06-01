import request from '@/utils/request';
import { obj2formdata } from '@/utils/utils';

// 规则配置-业务流程配置-列表
export async function flowList() {
  return request('/approveProcessConfig/queryDecisionRule?ajax=XMLHttpRequest', {
    method: 'GET',
  });
}
// 规则配置-业务流程配置-编辑
export async function editUserRule(params) {
  return request('/approveProcessConfig/queryUserRuleBySid?ruleSid=5836&ajax=XMLHttpRequest', {
    method: 'GET',
  });
}
//规则库-贷前规则库展示
export async function ruleLibraryList() {
  return request('/ruleLibrary/queryDefaultByOrgAuth?ajax=XMLHttpRequest', {
    method: 'GET',
  });
}