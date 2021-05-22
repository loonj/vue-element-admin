const Mock = require('mockjs')

const List = []
const count = 100

const Random = Mock.Random

// 模拟错误信息
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    data: '12987122' + i,
    time: '好滋好味鸡蛋仔-' + i,
    shop: Random.province()+','+Random.city(),
    log: '江浙小吃、小吃零食江浙小吃、小吃零食-' + i
  }))
}

module.exports = [
  {
    url: '/vue-element-admin/permission/datalog',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: List.length,
          items: List,
          limit: 10
        }
      }
    }
  }
]

