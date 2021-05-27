import req from '@/utils/request'

export function getDataLog(query) {
  // req()请求也可以
  return req.request({
    url: '/vue-element-admin/permission/datalog',
    method: 'get',
    params: query
  })
}

export function getDataLogTest(query) {
  // return req({ 这么写也可以
  return req.request({
    url: '/sfmyapi/ZSGoods.api',
    method: 'get',
    params: query
  })
}

export const loginApi = query => req.post('/public/login', query)

// export function loginApi(query) {
//   return myaxios.request({
//     url: '/public/login',
//     method: 'post',
//     data: query
//   })
// }
