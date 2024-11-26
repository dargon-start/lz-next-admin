import { useState } from 'react'
import { Button, Modal, Form, Input } from 'antd'

export default function CreateUserDialog({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean
  setModalVisible: (visible: boolean) => void
}) {

  const [form] = Form.useForm()
  const onModelOk = async (values: any) => {
    console.log('Success:', values)

    await form.validateFields()
    const val = form.getFieldsValue()
    console.log(val, '表单校验通过')

    setModalVisible(false)

  }

  const onModelCancel = () => {
    setModalVisible(false)
  }

  return (
    <>
      <Modal
        title="新增用户"
        centered
        open={modalVisible}
        onOk={onModelOk}
        onCancel={onModelCancel}
        width={600}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>

          <Form.Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder="请输入" />
          </Form.Item>

          <Form.Item
            label="地址"
            name="address"
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder="请输入"/>
          </Form.Item>

        </Form>
      </Modal>
    </>
  )
}