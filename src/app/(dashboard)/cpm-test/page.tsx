import React from 'react';
import { Button } from 'antd';

import LinearCpm from '@/components/linear-cpm';
import AuthPermission from '@/components/auth-permission';

export default function Home() {
  return (
    <div>
      <Button type="primary">user</Button>
      <LinearCpm></LinearCpm>
      <AuthPermission authCode='add'>
        <Button type='primary'>新增</Button>
      </AuthPermission>
    </div>
  );
}
