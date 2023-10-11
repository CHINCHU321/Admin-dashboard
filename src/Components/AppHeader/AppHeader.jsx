import React from 'react'
import{ BellFilled, MailOutlined} from '@ant-design/icons';
import {Badge, Image, Space, Typography} from 'antd';
function AppHeader() {
  return (
    <div className='AppHeader'>
        <Image
        width={55}
        src="./logo.png" alt="logo"></Image>
        <Typography.Title>Dashboard</Typography.Title>
        <Space>
          <Badge count={10}>
          <MailOutlined style={{fontSize:24}}/>
          </Badge>
          <Badge count={20}>
          <BellFilled style={{fontSize:24}}/>
          </Badge>
        </Space>
    </div>
  )
}

export default AppHeader
