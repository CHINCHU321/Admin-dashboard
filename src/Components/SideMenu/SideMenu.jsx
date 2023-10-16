import {Menu} from 'antd';
import{ AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined} 
from '@ant-design/icons';
import { useNavigate,useLocation} from 'react-router-dom';
import { useState, useEffect} from 'react'

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
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
          label:"Customers",
          key:'/Customers',
          icon: <UserOutlined/>

        }
      ]}></Menu>
    </div>
  )
}

export default SideMenu;
