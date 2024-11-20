import SearchFormTable from '@/components/search-form-table'
export default function Orders() {
  const searchFields = [
    {
      label: '订单编号',
      prop: 'orderNo',
      type: 'input',
    },
    {
      label: '订单状态',
      prop: 'orderStatus',
      type: 'select',
      options: [
        {
          label: '待支付',
          value: '1',
        },
        {
          label: '已支付',
          value: '2',
        },
      ],
    },
  ]

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
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

  return (
    <div>
      <SearchFormTable
        searchFields={searchFields}
        tableColumns={columns}
        tableData={dataSource}
      ></SearchFormTable>
    </div>
  )
}
