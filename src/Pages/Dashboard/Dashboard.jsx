import React from 'react'
import { Card, Space, Statistic, Table, Typography } from 'antd'
import{ ShoppingCartOutlined, ShoppingOutlined,UserOutlined, DollarCircleOutlined } from '@ant-design/icons';
function Dashboard() {
  return (
    <div>
       <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction='horizontal'>

          <DashboardCard icon={<ShoppingCartOutlined
          style={{
            color:"green",
            backgroundColor:"rgba(0,255,0,0.25)",
            borderRadius: 20,
            fontSize:24,
            padding:8
           }}/>} 
          title={'Orders'} 
          value={12345} />

          <DashboardCard
           icon={<ShoppingOutlined  style={{
            color:"blue",
            backgroundColor:"rgba(0,0,255,0.25)",
            borderRadius: 20,
            fontSize:24,
            padding:8
           }}/>} 
          title={'Inventory'} value={12345} />

          <DashboardCard icon={<UserOutlined
          style={{
            color:"purple",
            backgroundColor:"rgba(0,255,255,0.25)",
            borderRadius: 20,
            fontSize:24,
            padding:8
           }}/>} 
          title={'Customers'} value={12345} />

          <DashboardCard icon={<DollarCircleOutlined
          style={{
            color:"red",
            backgroundColor:"rgba(255,0,0,0.25)",
            borderRadius: 20,
            fontSize:24,
            padding:8
           }}/>} 
          title={'Revenue'} value={12345} />

        </Space>
        <Space>
          <RecentOrders/>
        </Space>
   </div>
  )
}
function DashboardCard({ title,value,icon}){
  return(
    <Card>
      <Space direction='horizontal'>
          <Card>
            <Space direction='horizontal'>
            {icon}
            <Statistic title={title} value={value}/>
            </Space>
          </Card>
        </Space>
    </Card>
  )
}
function RecentOrders(){
  return(
<Table
  columns={[
  {
    title:'title',
    dataIndex:'title',
  },
  {
    title:'Quantity',
    dataIndex:'quantity',
  },
  {
    title:'price',
    dataIndex:'discountPrice',
  }
]}
  ></Table>

  ) }
export default Dashboard
