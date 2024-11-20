import BasicLayout from '@/components/basic-layout'
import React from 'react'

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <BasicLayout>
        {/* <Watermark content={['00101', 'lz']}> */}
        {children}
        {/* </Watermark> */}
      </BasicLayout>
    </>
  )
}
