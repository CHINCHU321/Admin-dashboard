import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Inventory from '../../Pages/Inventory/Inventory';
import Customers from '../../Pages/Customers/Customers';
import Orders from '../../Pages/Orders/Orders';
function AppRoutes() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Dashboard}></Route>
    <Route path='/inventory' element={<Inventory}></Route>
    <Route path='/customers' element={<Customers}></Route>
    <Route path='/orders' element={<Orders}></Route>

   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes;
