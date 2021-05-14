import { request } from '@/utils/axios';
export const getSchemeList = (params: any) => {
  return request.get('/api/configs/get_all_scheme_configs', { params });
};
export const createScheme = (params: any) => {
  return request.post('/api/configs/create_scheme_config', params);
};
export const getSchemeDetail = (id: any) => {
  return request.get(`/api/configs/get_scheme_config_by_id/${id}`);
};

export const updateSchemeDetail = (id: any, params: any) => {
  return request.post(`/api/configs/modify_scheme_config/${id}`, params);
};
export const deleteScheme = (id: any) => {
  return request.delete(`/api/configs/delete_scheme_config/${id}`);
};
export const copyScheme = (id: any, params: any) => {
  return request.post(`/api/configs/fork_scheme_config/${id}`, params);
};
