import { AntdRegistry } from '@ant-design/nextjs-registry';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider, theme} from 'antd';

import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className='h-[100vh]'>
      <ConfigProvider locale={zhCN} >
        <AntdRegistry>{children}</AntdRegistry>
      </ConfigProvider>
      </body>
    </html>
  );
}
