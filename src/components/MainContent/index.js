// src/layouts/MainContent.jsx
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { menuObject } from "../HeaderObject";

const MainContent = () => {
  const headerIndex = useSelector((s) => s.header.id);
  const menu = menuObject[headerIndex];

  const allRoutes = [];

  if (menu) {
    // sideMenu
    if (Array.isArray(menu.sideMenu) && menu.sideMenu.length) {
      menu.sideMenu.forEach((m) => {
        if (m?.url && m?.component) {
          // ensure path starts with slash for consistency
          const path = m.url.startsWith("/") ? m.url : `/${m.url}`;
          allRoutes.push({ path, element: m.component });
        }
      });
    }

    // submenu
    if (Array.isArray(menu.submenu) && menu.submenu.length) {
      menu.submenu.forEach((s) => {
        if (s?.url && s?.component) {
          const path = s.url.startsWith("/") ? s.url : `/${s.url}`;
          allRoutes.push({ path, element: s.component });
        }
      });
    }

    // fallback: top-level menu's own url/component when there are no sideMenu/submenu
    const hasAnyChild = (menu.sideMenu?.length || menu.submenu?.length);
    if (!hasAnyChild && menu.url && menu.component) {
      const path = menu.url.startsWith("/") ? menu.url : `/${menu.url}`;
      allRoutes.push({ path, element: menu.component });
    }
  }

  // Always keep a root and fallback route
  return (
    <Routes>
      {allRoutes.length > 0 ? (
        allRoutes.map((r, i) => <Route key={i} path={r.path} element={r.element} />)
      ) : null}

      <Route path="/" element={<h2>Welcome! Home Page.</h2>} />
      <Route path="*" element={<h2>Welcome! Back — Page not found.</h2>} />
    </Routes>
  );
};

export default memo(MainContent);
