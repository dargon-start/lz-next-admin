import React from 'react';
import { Button } from 'antd';

import LinearCpm from '@/components/linear-cpm';

export default function Home() {
  return (
    <div>
      <Button type="primary">user</Button>
      <LinearCpm></LinearCpm>
    </div>
  );
}
