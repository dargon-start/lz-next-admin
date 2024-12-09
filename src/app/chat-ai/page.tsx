'use client'

import { use, useState } from 'react'
import { Card, App, Flex, Typography } from 'antd'
import { GithubOutlined, AlipayCircleOutlined, DockerOutlined, UserOutlined } from '@ant-design/icons'
import { Conversations, Sender, Welcome, Bubble } from '@ant-design/x'
import type { ConversationsProps, BubbleProps } from '@ant-design/x'
import type { GetProp } from 'antd'
import markdownIt from 'markdown-it'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import hljs from 'highlight.js'

import { inputMessage } from './hook'

// 回话列表
const items: GetProp<ConversationsProps, 'items'> = [
  // Basic
  {
    key: 'item1',
    label: 'What is Ant Design X?',
    icon: <GithubOutlined />,
  },
  // label as ReactNode
  {
    key: 'item2',
    label: (
      <div>
        Getting Started:{' '}
        <a target="_blank" href="https://ant-design.antgroup.com/index-cn" rel="noreferrer">
          Ant Design !
        </a>
      </div>
    ),
    icon: <AlipayCircleOutlined />,
  },
  // Auto ellipsis
  {
    key: 'item3',
    label: 'In Docker, use 🐑 Ollama and initialize',
    icon: <DockerOutlined />,
  },
  // Disabled
  {
    key: 'item4',
    label: 'Expired, please go to the recycle bin to check',
    // disabled: true,
  },
]

// 历史消息
const fooAvatar: React.CSSProperties = {
  color: '#f56a00',
  backgroundColor: '#fde3cf',
}

const barAvatar: React.CSSProperties = {
  color: '#fff',
  backgroundColor: '#87d068',
}

const hideAvatar: React.CSSProperties = {
  visibility: 'hidden',
}

// 文本以markdown渲染
const md = markdownIt({
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) {}
    }

    return ''
  },
})

const renderMarkdown: BubbleProps['messageRender'] = (content) => (
  <Typography>
    <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
  </Typography>
)

export default function ChatAI() {

  const [value, setValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { message } = App.useApp()

  // 是否有提问
  const [hasRequested, setHasRequested] = useState(false)
  const [messages, setMessages] = useState<any[]>([{
    role: 'assistant',
    content: 'Hi, I am chat-AI, how can I help you?',
  }])

  const onSubmit = async () => {
    setValue('')
    setLoading(true)
    setHasRequested(true)

    const newMessage = { role: 'user', content: value }
    setMessages([...messages, newMessage])

    const answerMsg = await inputMessage([...messages, newMessage])
    setMessages([...messages, newMessage, answerMsg])
    setLoading(false)
  }

  return (
    <div className="flex h-full">
      <Card style={{ width: 320, height: '100%' }} size="small">
        <Conversations items={items} defaultActiveKey="item1" />
      </Card>
      <div className="flex flex-col justify-between h-full w-full p-5">
        <div className="flex-1 mb-2.5">
          <h1 className="mb-5">Chat-AI</h1>
          {
            hasRequested
              ? <Flex gap="middle" vertical>
                {
                  messages.map((item, index) => (
                    <Bubble
                      placement={item.role === 'assistant' ? 'start' : 'end'}
                      key={index}
                      typing={{ step: 2, interval: 50 }}
                      content={item.content}
                      messageRender={renderMarkdown}
                      avatar={{ icon: <UserOutlined /> }}
                    />
                  ))
                }
              </Flex>
              : <Welcome
                style={{
                  backgroundImage: 'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
                  borderStartStartRadius: 4,
                }}
                icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
                title="Hello, I'm chat-AI"
                description="welcome to use chat-AI"
              />
          }

        </div>
        <Sender
          loading={loading}
          value={value}
          onChange={(v) => {
            setValue(v)
          }}
          onSubmit={onSubmit}
          onCancel={() => {
            setLoading(false)
            message.error('Cancel sending!')
          }}
        />
      </div>
    </div>
  )
}
