import OpenAI from 'openai'

const openai = new OpenAI(
  {
    apiKey: process.env.NEXT_PUBLIC_DASHSCOPE_API_KEY,
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    dangerouslyAllowBrowser: true,
  }
)

export async function inputMessage(messages: any[]) {
  const completion = await openai.chat.completions.create({
    model: 'qwq-32b-preview', //模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
    messages,
    // stream: true,
  })
  console.log(completion, JSON.stringify(completion))

  return completion.choices[0]?.message
}
