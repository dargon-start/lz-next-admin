'use client'

import React from 'react';
import useTheme from '@/hook/useTheme'

export default function LayoutHeader () {

  const [curTheme, setTheme] = useTheme()

  const changeTheme = () => {
    console.log(curTheme);
    
    setTheme(curTheme==='light' ? 'dark' : 'light')
  }

  return (
    <div className='flex flex-row justify-between h-[50px] shadow-md'>
      <div className='w-[200px] h-[50px] text-center text-4xl text-indigo-600 '>logo</div>
      <div className='flex flex-row mr-[50px]'>
        <div className='ml-[10px]'>用户名</div>
        <div className='ml-[10px]' onClick={changeTheme}>主题</div>
      </div>
    </div>
  );
}