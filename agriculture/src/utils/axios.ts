import axios from 'axios';
import { ElMessage } from 'element-plus';
import { handleListData } from '@/utils/dataProcess';
// if (window.AxiosMockerExt) {
//   new AxiosMockerExt(axios);
// }
import { formatDate } from './dataProcess';
fetch('/api/accounts/get_lucky_member')
  .then((res) => res.json())
  .then((res) => {
    localStorage.setItem('userId', res.data.id);
  });
const request = axios.create({
  // baseURL: 'http://10.37.0.213:30118/',
  //   headers: { "X-Custom-Header": "foo" }
});
// interface IResponse {
//   data: { code: number; msg: string };
// }

request.interceptors.response.use(
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response?.data?.code === 200) {
      const data = response?.data;
      if (Array.isArray(data?.data?.result)) {
        data.data.result = handleListData(data.data.result);
        return Promise.resolve(data);
      }
      console.log(data);
      if ('create_time' in data?.data) {
        data.data.create_time = formatDate(data.data.create_time);
      }

      return Promise.resolve(data);
    } else {
      // console.log(response.config.foo);
      const msgInfo = response?.data?.msg || '请求出错';
      console.log(msgInfo);
      ElMessage({
        message: msgInfo,
        type: 'warning',
      });
      // eslint-disable-next-line no-debugger
      return Promise.reject(msgInfo);
    }
    // return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
request.interceptors.request.use((config) => {
  // return Promise.resolve('飒飒撒');
  const globalUserId = localStorage.getItem('userId') || '';

  if (config.params) {
    config.params['user_id'] = globalUserId;
    // config.params['user_id'] = '';
  }
  if (config.data) {
    config.data['user_id'] = globalUserId;
  }
  return config;
});

export { request };
