import Mock from 'mockjs'

// 输出结果
export function GET () {

  const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'name': '@cname',
      'age|1-100': 100,
      'address': '@county(true)',
    }],
  })

  console.log(data)

  return Response.json({
    msg: '成功',
    data: data.list,
  })
}

