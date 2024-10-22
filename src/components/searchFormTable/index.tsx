'use client'
import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Select, Space, theme, Table} from 'antd';
import type { TableProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select

type Options = {
  label: string;
  value: string;
}

type SearchFields = {
  label: string;
  prop: string,
  type: string;
  placeholder?: string;
  options?: Options[];
}

type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
}

type Props = {
  searchFields: SearchFields[],
  tableColumns: TableProps<DataType>['columns'],
  tableData: DataType[]
} 



export default function SearchFormTable({ searchFields, tableColumns, tableData }:Props){

  const { token } = theme.useToken();
  const [form] = Form.useForm()
  const [expand, setExpand] = useState(false);
  const total = 100
  
  const formStyle: React.CSSProperties = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };

  const pagination = {
    total:total,
    defaultPageSize:20,
    defaultCurrent:1,
  }

  // 渲染搜索条件
  const getFields = () => {
    return searchFields.map((item: SearchFields) => {
      return (
        <Col span={8} key={item.prop}>
          <Form.Item label={item.label}>
              { 
                item.type === 'select' && (
                  <Form.Item name={item.prop} noStyle>
                    <Select placeholder={item.placeholder || '请选择'}>
                      {item.options?.map((option:Options) => {
                        return (
                          <Option key={option.value} value={option.value}>
                            {option.label}
                          </Option>
                        )
                      })}
                    </Select>
                  </Form.Item>
                )
              }
              {
                item.type === 'input' && (
                  <Form.Item name={item.prop} noStyle>
                    <Input placeholder={item.placeholder || '请输入'} />
                  </Form.Item>
                )
              }
          </Form.Item>
        </Col>
      )
    })
  }

  const onFinish = (values: unknown) => {
    console.log('Received values of form: ', values);
  };


  return (
    <div className='m-2.5'>
      <Form form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
        <Row gutter={24}>{getFields()}</Row>
        <div style={{ textAlign: 'right' }}>
          <Space size="small">
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button
              onClick={() => {
                form.resetFields();
              }}
            >
              重置
            </Button>
            <a
              style={{ fontSize: 12 }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <DownOutlined rotate={expand ? 180 : 0} /> Collapse
            </a>
          </Space>
        </div>
      </Form>
      <Table<DataType> className='mt-2.5' 
        columns={tableColumns}
        dataSource={tableData}
        pagination={pagination}
       />
    </div>
  );
}