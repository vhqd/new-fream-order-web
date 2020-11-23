/**
 * axios请求封装
 * @author chenmb
 * @since 2020/11/12
 */

import Vue from 'vue';
import axios from 'axios';
import { sign } from '@fe/common';
import CONFIG from 'constants/config';

// 支持的方法
const methods = ['get', 'head', 'post', 'put', 'delete', 'options', 'patch', 'form'];
const paramsMethods = ['get', 'delete'];

// 添加请求前缀
const API_PREFIX = '/subapp';

// 允许携带cookie
axios.defaults.withCredentials = true;

class Api {
  constructor() {
    methods.forEach(
      (method) =>
        (this[method] = (path, data = {}, headers = {}) =>
          new Promise((resolve, reject) => {
            this.doFetch(method, path, data, headers, resolve, reject);
          })),
    );
  }

  doFetch(method, path, data, headers, resolve, reject) {
    const isForm = method === 'form';
    const formData = isForm ? new FormData() : null;
    if (isForm) {
      if (data && data.length > 0) {
        const paths = [];
        data.forEach((file) => {
          formData.append('file', file);
          paths.push(file.title);
        });
        formData.append('paths', paths.toString(','));
      } else {
        const dataKeys = Object.keys(data);
        for (const key of dataKeys) {
          formData.append(key, data[key]);
        }
      }
    }

    // 签名
    const signData = sign({
      method,
      rawData: data,
      sysCode: CONFIG.SYS_CODE,
      secret: CONFIG.SECRET,
    });

    const config = {
      headers: {
        'Content-Type': isForm ? 'multipart/form-data' : 'application/json',
        ...headers,
        ...signData,
      },
    };

    data = paramsMethods.indexOf(method) !== -1 ? { params: data, ...config } : data;
    const _path = path.indexOf('http') === 0 ? path : `${API_PREFIX}${path}`;
    axios[isForm ? 'post' : method](_path, isForm ? formData : data, config)
      .then(({ data }) => {
        if (data.code === 200) {
          resolve(data.data);
        } else {
          // 逻辑错误，按实际业务需求处理，默认弹窗提示
          Vue.prototype.$message({
            message: data.message,
            type: 'error',
          });
          reject(data);
        }
      })
      .catch(async (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            // TODO: 401逻辑
          } else {
            reject(error.response.data);
          }
        } else {
          reject(error);
        }
      });
  }
}

const api = new Api();

export default api;
