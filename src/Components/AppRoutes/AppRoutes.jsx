import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function AppRoutes() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Dash}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes;
