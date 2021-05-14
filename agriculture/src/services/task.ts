import { request } from '@/utils/axios';

export const getTaskList = (params: any) => {
  return request.get('/api/task/get_all_tasks', { params });
};
export const getLatestTask = (params: any) => {
  return request.get('/api/task/get_all_latest_tasks', { params });
};
export const runTask = (task_id: any) => {
  return request.post(`/api/task/execute_task/${task_id}`);
};
export const createTask = (params: any) => {
  return request.post('/api/task/create_task', params);
};
export const modifyTask = (params: any) => {
  return request.post('/api/task/modify_task', params);
};
export const deleteTask = (task_id: any) => {
  return request.get(`/api/task/delete_task/${task_id}`);
};
export const getTask = (task_id: any) => {
  return request.get(`/api/task/get_task_by_id/${task_id}`);
};
export const stopTask = (task_id: any) => {
  return request.post(`/api/task/suspend_task/${task_id}`);
};
export const removeTool = (task_id: any, tool_id: any) => {
  return request.post(`/api/task/remove_tool/${task_id}/${tool_id}`);
};
export const suspendTool = (task_id: any, tool_id: any) => {
  return request.post(`/api/task/suspend_tool/${task_id}/${tool_id}`);
};
export const restartTool = (task_id: any, tool_id: any) => {
  return request.post(`/api/task/execute_single_tool/${task_id}/${tool_id}`);
};
