import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='h-[100vh]'>
         <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
