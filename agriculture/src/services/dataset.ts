import { request } from '@/utils/axios';
export const getDatasetList = (params: any) => {
  const { projectId, ...rest } = params;
  return request.get(`/api/models/get_all_datasets/${projectId}`, { params: rest });
};
export const getDataset = (dataset_id: any) => {
  return request.get(`/api/models/get_dataset/${dataset_id}`);
};
export const createDataset = (params: any) => {
  return request.post(`/api/models/create_dataset`, params);
};

export const getDatasetSummary = (dataset_id: any) => {
  return request.get(`/api/models/get_dataset_summary/${dataset_id}`);
};

export const deleteDataset = (dataset_id: string) => {
  return request.post(`/api/models/delete_dataset/${dataset_id}`);
};
export const editDataset = (dataset_id: string, params: any) => {
  return request.post(`/api/models/modify_dataset/${dataset_id}`, params);
};
