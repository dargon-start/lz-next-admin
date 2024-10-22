import React from 'react';
import LayoutHeader from '@/components/layoutHeader'
import LayoutMenu from '@/components/layoutMenu'

export default function Menu ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col h-[100%]'>
      <LayoutHeader></LayoutHeader>
      <div className='flex flex-1'>
        <LayoutMenu></LayoutMenu>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}