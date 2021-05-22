import Mock from 'mockjs'

const List = []

const count = 10

// 模拟错误信息
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    data: '12987122',
    time: '好滋好味鸡蛋仔',
    log: '江浙小吃、小吃零食江浙小吃、小吃零食'
  }))
}

export default {
  // 获取错误信息列表
  getDataLog: () => {
    return {
      total: List.length,
      items: List,
      limit: 10
    }
  }
}

