const orderDetail = {
  path: '/order/detail',
  name: 'detail',
  meta: {
    title: '订单详情',
    active: '/order/list',
    keepAlive: true,
  },
  component: () => import('views/order/detail.vue'),
  children: [
    {
      path: 'detail-order-info',
      name: 'detail-order-info',
      meta: {
        title: '订单信息',
        active: '/order/list',
        keepAlive: true,
      },
      component: () => import('views/order/components/detail-order-info.vue'),
    },
    {
      path: 'detail-financial-info',
      name: 'detail-financial-info',
      meta: {
        title: '财务信息',
        active: '/order/list',
        keepAlive: true,
      },
      component: () => import('views/order/components/detail-financial-info.vue'),
    },
    {
      path: 'detail-production-info',
      name: 'detail-production-info',
      meta: {
        title: '生产信息',
        active: '/order/list',
        keepAlive: true,
      },
      component: () => import('views/order/components/detail-production-info.vue'),
    },
    {
      path: 'detail-tracking-info',
      name: 'detail-tracking-info',
      meta: {
        title: '订单跟踪',
        active: '/order/list',
        keepAlive: true,
      },
      component: () => import('views/order/components/detail-tracking-info.vue'),
    },
  ],
  redirect: '/order/detail/detail-order-info',
};
export default orderDetail;
