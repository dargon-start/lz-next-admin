'use client'

import React from 'react';

import {useThemeContext} from '@/hook/themeContext'

export default function LayoutHeader () {

  const { toggleTheme } = useThemeContext()



  return (
    <div className='flex flex-row justify-between h-[50px] shadow-md'>
      <div className='w-[200px] h-[50px] text-center text-4xl text-indigo-600 '>logo</div>
      <div className='flex flex-row mr-[50px]'>
        <div className='ml-[10px]'>用户名</div>
        <div className='ml-[10px]' onClick={toggleTheme}>主题</div>
      </div>
    </div>
  );
}