'use client'

import { useEffect, useState } from 'react'
import { Button } from 'antd'

import SearchFormTable from '@/components/search-form-table'

import { getUserList } from './api'
import style from './index.module.scss'
import CreateUserDialog from './_components/CreateUserDialog'

export default function Home() {
  const [userList, setUserList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const searchFields = [
    {
      label: '姓名',
      prop: 'name',
      type: 'input',
    },
    {
      label: '年龄',
      prop: 'age',
      type: 'input',
    },
  ]

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  useEffect(() => {
    getUserList().then(({ data }) => {
      setUserList(data)
    })

  }, [])

  const actionsElement = (
    <div>
      <Button type="primary" onClick={() => setModalVisible(true)}>新增</Button>
    </div>
  )

  return (
    <div className={`h-full w-full ${style['user-wrap']}`}>
      <SearchFormTable
        searchFields={searchFields}
        tableColumns={columns}
        tableData={userList}
        actionsElement={actionsElement}
      ></SearchFormTable>

      <CreateUserDialog
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  )
}
