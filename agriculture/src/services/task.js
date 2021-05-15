//import { request } from '@/utils/axios';
// const
//     axios = require('axios')
// const qs = require('qs')
import { axios } from 'axios';
// axios.defaults.headers.common['Content-Type'] = 'application/json, application/x-www-form-urlencoded';

// const instance = axios.create({
//     timeout: 30000,
// });
export const getPlantList = () => {
    return axios.get('/webdapeng_war/plant-list');
};
export const getFieldList = () => {
    return axios.get('/webdapeng_war/field-list');
};

// function getDataJSONByGET(url, param, config) {
//     return new Promise((resolve, rejcet) => {
//         instance.get(url, { params: param }, config).then(result => {
//             let data = result.data
//             try {
//                 data = JSON.parse(data)
//             } catch (e) {

//             }
//             resolve(data)
//         })
//     })
// }