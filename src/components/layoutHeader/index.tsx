'use client'

import React from 'react';
import Image from 'next/image';

import {useThemeContext} from '@/hook/themeContext'
import themeLight from '@/assets/svg/theme-light.svg'
import themeDark from '@/assets/svg/theme-dark.svg'

export default function LayoutHeader () {

  const { theme, toggleTheme } = useThemeContext()

  return (
    <div className='flex flex-row justify-between h-[50px] shadow-md'>
      <div className='w-[200px] h-[50px] text-center text-4xl text-indigo-600 '>logo</div>
      <div className='flex flex-row items-center mr-[50px]'>
        <div className='ml-[10px]'>用户名</div>
        <div className='ml-[10px] cursor-pointer' onClick={toggleTheme}>
          {theme === 'light' ? (
            <Image src={themeLight} alt='theme-light' />
          ) : (
            <Image src={themeDark} alt='theme-dark' />
          )}
        </div>
      </div>
    </div>
  );
}