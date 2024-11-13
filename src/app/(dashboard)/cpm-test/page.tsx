import React from 'react';
import { Button } from 'antd';

import LinearCpm from '@/components/linear-cpm';
import AuthPermission from '@/components/auth-permission';
import CpmWrap from '@/components/cpm-wrap'
import DragAndDrop from '@/components/drag-and-drop'

export default function Home() {
  return (
    <div>
      <CpmWrap>
        <h1 className='mb-2.5'>渐变组件</h1>
        <LinearCpm></LinearCpm>
      </CpmWrap>

      <CpmWrap>
        <h1 className='mb-2.5'>权限组件</h1>
        <AuthPermission authCode='add'>
          <Button type='primary'>新增</Button>
        </AuthPermission>
      </CpmWrap>
     
      <CpmWrap>
        <h1 className='mb-2.5'>拖拽组件</h1>
        <DragAndDrop></DragAndDrop>
      </CpmWrap>
      
    </div>
  );
}
