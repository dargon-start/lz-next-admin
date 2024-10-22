'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider, theme} from 'antd';

import useTheme from '@/hook/useTheme'

import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [curTheme] = useTheme()
  
  return (
    <html lang="en">
      <body className='h-[100vh]'>
      <ConfigProvider locale={zhCN} theme={{
        algorithm: curTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}>
        <AntdRegistry>{children}</AntdRegistry>
      </ConfigProvider>
      </body>
    </html>
  );
}
