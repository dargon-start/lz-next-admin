import { ConfigProvider, theme } from 'antd';  
import locale from 'antd/locale/zh_CN';  

import useTheme from '@/hook/useTheme'
import {ThemeContext} from '@/hook/themeContext'
import type {ThemeContextValue} from '@/hook/themeContext'
import themeConfig from './themeConfig';
export interface ThemeProviderProps {  
  children: React.ReactNode;  
}

export default function ThemeProvider(props: ThemeProviderProps) {  
  const [value, toggleTheme] = useTheme();

  return (  
      <ThemeContext.Provider value={{ theme: value, toggleTheme } as ThemeContextValue}>  
          <ConfigProvider  
              locale={locale} 
              theme={{ 
                  cssVar: true,
                  hashed: false,                
                  algorithm:  
                  value === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,  
                  token: themeConfig.token,
              }}
          >
            {props.children}
          </ConfigProvider>  
      </ThemeContext.Provider>
  ); 
}