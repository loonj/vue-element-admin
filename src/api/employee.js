import req from '@/utils/request'

export function getEmployee(query) {
  return req.request({
    url: '/api/employee/list_page2',
    method: 'get',
    params: query
  })
}
