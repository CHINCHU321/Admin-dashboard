import React from 'react'
import { Card, Space, Statistic, Typography } from 'antd'
import{ ShoppingCartOutlined} from '@ant-design/icons';
function Dashboard() {
  return (
    <div>
       <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction='horizontal'>
          <DashboardCard  title={'Orders'} value={12345} />
          <DashboardCard  title={'Invetory'} value={12345} />
          <DashboardCard  title={'Customers'} value={12345} />
          <DashboardCard  title={'Revenue'} value={12345} />

        </Space>
   </div>
  )
}
function DashboardCard({ title,value}){
  return(
    <Card>
      <Space direction='horizontal'>
          <Card>
            <Space direction='horizontal'>
              <ShoppingCartOutlined/>
              <Statistic title={title} value={value}/>
            </Space>
          </Card>
        </Space>
    </Card>
  )
}

export default Dashboard
