'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry';
import ThemeProvider from '@/components/theme-provider';
import './globals.scss';
import { useStyles } from '@/styles';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { styles, cx } = useStyles();

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AntdRegistry>
            <div className={cx('h-[100vh]', styles.container)}>
              {children}
            </div>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
