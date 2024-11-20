import { NextApiRequest, NextApiResponse } from 'next'

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'GET') {
    return response.status(400).send('无效请求')
  }

  const list = [
    { name: '1', age: '1' },
    {
      name: '2',
      age: '2',
    },
  ]

  return response.status(200).json({
    msg: '成功',
    data: list,
  })
}

export default handler
