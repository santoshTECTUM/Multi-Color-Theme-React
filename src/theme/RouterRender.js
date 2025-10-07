import React, { memo } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { menuObject } from './HeaderObject'
import { useSelector } from 'react-redux';

const RouterRender = () => {
  const headerName = useSelector((s) => s.header.name);
  const headerIndex = useSelector((s) => s.header.id);
  const menuItems = menuObject[headerIndex]?.sideMenu;
  console.log("headerName",headerName, "headerIndex",headerIndex, "menuItems",menuItems);

  return (
    <>
      {/* <h1>Router</h1> */}
      {/* <Router> */}
      <Routes>
        {menuItems?.length > 0 ? menuItems?.map((item, index) => (
          <Route key={index} path={item?.url} element={item.component} />
        )) :  <Route path="*" element={<h2>Welcome! Back Page not found.</h2>} />}

        <Route path="/" element={<h2>Welcome! Home Page.</h2>} />
        {/* <Route path="*" element={<h2>Welcome! Back Page not found.</h2>} /> */}
      </Routes>
      {/* </Router> */}
    </>
  )
}

export default memo(RouterRender)
