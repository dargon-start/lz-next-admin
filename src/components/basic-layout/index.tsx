'use client'

import React from 'react';
import LayoutHeader from '@/components/layoutHeader'
import LayoutMenu from '@/components/layout-menu'
import { theme } from 'antd';
export default function Menu ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { token } = theme.useToken();
  return (
    <div className='flex flex-col h-[100%]' style={{ backgroundColor: token.colorBgLayout }}>
      <LayoutHeader></LayoutHeader>
      <div className='flex flex-1'>
        <LayoutMenu></LayoutMenu>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}