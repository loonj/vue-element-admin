import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

// 真实登录接口登录
// export const loginApi = query => request.post('/public/login', query)

// export function loginApi(data) {
//   return request({
//     url: '/public/login',
//     method: 'post',
//     data: data
//   })
// }

export function loginApiUser(query) {
  return request.request({
    url: '/public/login',
    method: 'post',
    data: query
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
