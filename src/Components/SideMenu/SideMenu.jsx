import React from 'react'
import {Menu} from 'antd';
import{ AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined} 
from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className='SideMenu'>
      <Menu
      onClick={(item)=>{
        navigate(item.key);
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
