import React from 'react'
import {Image, Typography} from 'antd';
function AppHeader() {
  return (
    <div className='AppHeader'>
        <Image
        width={55}
        src="./logo.png" alt="logo"></Image>
        <Typography.Title></Typography.Title>
    </div>
  )
}

export default AppHeader
