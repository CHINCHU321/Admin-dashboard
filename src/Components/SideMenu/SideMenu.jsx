import React from 'react'
import {Menu} from 'antd';
import{ AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined} 
from '@ant-design/icons';

function SideMenu() {
  return (
    <div className='SideMenu'>
      <Menu
      onClick={(items)=>{
        
      }}
      
      items={[
        {
          label:"Dashboard",
          key:'/',
          icon: <AppstoreOutlined/>
        },
        {
          label:"Inventory",
          key:'/Inventory',
          icon: <ShopOutlined/>

        },
        {
          label:"Orders",
          key:'/Orders',
          icon: <ShoppingCartOutlined/>

        },
        {
          label:"Costomers",
          key:'/Costomers',
          icon: <UserOutlined/>

        }
      ]}></Menu>
    </div>
  )
}

export default SideMenu;
