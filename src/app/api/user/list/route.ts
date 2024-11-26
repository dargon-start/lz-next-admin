import { NextApiRequest, NextApiResponse } from 'next'

export function GET () {
  const list = [
    {
      name: '1',
      age: '1',
      address: '测试1',
    },
    {
      name: '2',
      age: '2',
      address: '测试2',
    },
  ]

  return Response.json({
    msg: '成功',
    data: list,
  })
}

