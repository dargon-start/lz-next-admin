'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry';
import ThemeProvider from '@/components/theme-provider';
import './globals.scss';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AntdRegistry>
            <div className='h-[100vh]'>
              {children}
            </div>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
