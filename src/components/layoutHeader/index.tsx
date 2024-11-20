'use client'

import Image from 'next/image'

import themeDark from '@/assets/svg/theme-dark.svg'
import themeLight from '@/assets/svg/theme-light.svg'
import { useThemeContext } from '@/hooks/themeContext'

export default function LayoutHeader() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <div className="flex h-[50px] flex-row justify-between shadow-md">
      <div className="h-[50px] w-[200px] text-center text-4xl text-indigo-600">
        logo
      </div>
      <div className="mr-[50px] flex flex-row items-center">
        <div className="ml-[10px]">用户名</div>
        <div className="ml-[10px] cursor-pointer" onClick={toggleTheme}>
          {theme === 'light' ? (
            <Image src={themeLight} alt="theme-light" />
          ) : (
            <Image src={themeDark} alt="theme-dark" />
          )}
        </div>
      </div>
    </div>
  )
}
