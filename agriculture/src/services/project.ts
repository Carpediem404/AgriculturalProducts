import { request } from '@/utils/axios';

export const getProjectList = (params: any) => {
  return request.get('/api/project/get_all_projects', { params });
};
export const getProjectInfo = (id: string) => {
  return request.get(`/api/project/get_project_by_id/${id}`);
};
export const addProject = (params: any) => {
  return request.post('/api/project/create_project', params);
};
export const deleteProject = (id: string) => {
  return request.post(`/api/project/delete_project/${id}`);
};
export const updateProject = (params: any) => {
  return request.post('/api/project/modify_project', params);
};
