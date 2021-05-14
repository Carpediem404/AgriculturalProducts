import { request } from '@/utils/axios';
export const getToolParams = (params: any, tool_id: any) => {
  return request.get(`/api/configs/get_all_parameter_configs/${tool_id}`, { params });
};
export const deleteParams = (params_id: any) => {
  return request.get(`/api/configs/delete_parameter_config/${params_id}`);
};
export const copyParams = (params: any, params_id: any) => {
  return request.post(`/api/configs/fork_parameter_config/${params_id}`, params);
};

export const createParams = (params: any) => {
  return request.post(`/api/configs/create_parameter_config`, params);
};
export const getParams = (id: any) => {
  return request.get(`/api/configs/get_parameter_config_by_id/${id}`);
};
export const updateParams = (id: any, params: any) => {
  return request.post(`/api/configs/modify_parameter_config/${id}`, params);
};
