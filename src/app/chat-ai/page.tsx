'use client'

import { use, useState } from 'react'
import { Card, App, Flex } from 'antd'
import { GithubOutlined, AlipayCircleOutlined, DockerOutlined, UserOutlined } from '@ant-design/icons'
import { Conversations, Sender, Welcome, Bubble } from '@ant-design/x'
import type { ConversationsProps } from '@ant-design/x'
import type { GetProp } from 'antd'

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

export default function ChatAI() {

  const [value, setValue] = useState<string>('Hello? this is X!')
  const [loading, setLoading] = useState<boolean>(false)

  const { message } = App.useApp()

  // 是否有提问
  const [hasRequested, setHasRequested] = useState(false)

  return (
    <div className="flex h-full">
      <Card style={{ width: 320, height: '100%' }} size="small">
        <Conversations items={items} defaultActiveKey="item1" />
      </Card>
      <div className="flex flex-col justify-between h-full w-full p-5">
        <div>
          <h1 className="mb-5">Chat-AI</h1>
          {
            hasRequested
              ? <Flex gap="middle" vertical>
                <Bubble
                  placement="start"
                  content="Good morning, how are you?"
                  avatar={{ icon: <UserOutlined />, style: fooAvatar }}
                />
                <Bubble
                  placement="start"
                  content="What a beautiful day!"
                  styles={{ avatar: hideAvatar }}
                  avatar={{}}
                />
                <Bubble
                  placement="end"
                  content="Hi, good morning, I'm fine!"
                  avatar={{ icon: <UserOutlined />, style: barAvatar }}
                />
                <Bubble placement="end" content="Thank you!" styles={{ avatar: hideAvatar }} avatar={{}} />
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
          onSubmit={() => {
            setValue('')
            setLoading(true)
            setHasRequested(true)
            message.info('Send message!')
          }}
          onCancel={() => {
            setLoading(false)
            message.error('Cancel sending!')
          }}
        />
      </div>
    </div>
  )
}
