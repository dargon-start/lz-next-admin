'use client'

import ThemeProvider from '@/components/theme-provider'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import 'antd/dist/reset.css'
import './globals.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AntdRegistry>
            <div className="h-screen">{children}</div>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
