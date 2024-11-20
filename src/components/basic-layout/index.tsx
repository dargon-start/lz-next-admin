'use client'

import LayoutMenu from '@/components/layout-menu'
import LayoutHeader from '@/components/layoutHeader'
import { theme } from 'antd'
import React from 'react'
export default function Menu({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { token } = theme.useToken()
  return (
    <div
      className="flex h-[100%] flex-col"
      style={{
        backgroundColor: token.colorBgLayout,
        color: token.colorTextBase,
      }}
    >
      <LayoutHeader></LayoutHeader>
      <div className="flex flex-1">
        <LayoutMenu></LayoutMenu>
        <main
          className="flex-1 overflow-auto"
          style={{ height: 'calc(100vh - 50px)' }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
