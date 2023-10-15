import React, { useState,useEffect } from 'react'
import { Table, Typography, Space } from 'antd'
import { getInventory } from '../../API'

function Inventory() {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])
  useEffect(() => {
    setLoading(true)
    getInventory().then(res=>{
      setDataSource(res.productsSpace)
    })
  }, [])
  
  return (
    <Space size={20}>
       <Typography.Title level={4}>Inventory</Typography.Title>
      <Table>
        columns={[
          {
            title:'Title',
            dataIndex:'title',
          },
          {
            title:'Price',
            dataIndex:'price',
          }, {
            title:'Rating',
            dataIndex:'rating',
          }, {
            title:'Stock',
            dataIndex:'stock',
          },
          {
            title:'Thumbnail',
            dataIndex:'thambnail',
          },
          {
            title:'Brand',
            dataIndex:'brand',
          }, {
            title:'Category',
            dataIndex:'category',
          }
        ]}
        dataSource={dataSource}
      </Table>
   </Space>
  )
}

export default Inventory
