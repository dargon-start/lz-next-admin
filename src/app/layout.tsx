'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry';
import ThemeProvider from '@/components/theme-provider';
import './globals.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className='h-[100vh]'>
        <ThemeProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ThemeProvider>  
      </body>
    </html>
  );
}
