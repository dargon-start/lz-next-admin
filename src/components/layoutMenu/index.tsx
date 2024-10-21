"use client"
import React from 'react';
import { Menu } from 'antd'
import type { MenuProps } from 'antd';
import { useRouter } from 'next/navigation'
import {
  AppstoreOutlined,
  MailOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    label: '用户管理',
    icon: <MailOutlined />,
    children: [
      { key: '/user', label: '用户列表' },
    ],
  },
  {
    key: '2',
    label: '订单管理',
    icon: <AppstoreOutlined />,
    children: [
      { key: 'orders', label: '订单' },
    ],
  },
];

export default function LayoutMenu () {

  // const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  const router = useRouter()
  
  const handleClick = (item: MenuItem) => {
    console.log(item,'item');
    if(item && item.key){
      router.push(item.key as string)
    }
  };

  return (<div>
      <Menu
        style={{width:256, height:'100%'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        items={items}
        onClick={handleClick}
      />
    </div>
  );
}