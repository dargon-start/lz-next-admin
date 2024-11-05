
import React from "react";
import { Watermark } from 'antd';
import BasicLayout from '@/components/basic-layout'

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <>
      <BasicLayout>
        <Watermark content={['00101', 'lz']} style={{height:'100%'}}>
          {children}
        </Watermark>
      </BasicLayout>
    </>
  )
}