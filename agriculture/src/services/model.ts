import { request } from '@/utils/axios';

// export const getModelList = (params: any, projectId: string | string[]) => {
//   return request.get(`/api/models/get_all_models/${projectId}`, { params });
// };

export const getModelList = (params: any) => {
  const { projectId, ...rest } = params;
  return request.get(`/api/models/get_all_models/${projectId}`, { params: rest });
};
export const createModel = (params: any) => {
  return request.post('/api/models/create_model', params);
};
export const deleteModel = (modelId: any) => {
  return request.post(`/api/models/delete_model/${modelId}`);
};
export const editModel = (params: any, modelId: any) => {
  return request.post(`/api/models/modify_model/${modelId}`, params);
  // return request.post('/api/models/modify_model', params);
};
export const getModel = (model_id: any) => {
  return request.get(`/api/models/get_model/${model_id}`);
};
export const getProject = (projectId: any) => {
  return request.get(`/api/project/get_project_by_id/${projectId}`);
};
export const getModelSummary = (projectId: any) => {
  return request.get(`/api/models/models_summary/${projectId}`);
};
