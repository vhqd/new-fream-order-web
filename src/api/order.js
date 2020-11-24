import api from 'utils/api';

/**
 *
 * @param {*} params 获取客户单列表数据
 */
export async function getList(params) {
  const path = '/api/order_center/service/yk/v1/cusOrderList.do';
  const data = await api.post(path, params);
  return data;
}

/**
 * @description 获取过滤条件下拉数据
 */
export async function getProductType() {
  const path = '/api/order_center/service/yk/v1/headData.do';
  const data = await api.get(path);
  return data;
}
