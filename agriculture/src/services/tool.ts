import { request } from '@/utils/axios';

export const getAllTools = () => {
  return request.get('/api/evaltools/get_all_tools');
};

export const getToolResult = (params: { tool_name: string; task_id: string }) => {
  return request.get('/api/result/get_result', { params });
};
export const getToolParams = (task_id: string, tool_id: string) => {
  return request.get(`api/configs/get_tool_parameter_by_id/${task_id}/${tool_id}`);
};
