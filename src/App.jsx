import React, { memo, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MovingBackground from './components/MovingBackground';
import AnimatedButton from './components/AnimatedButton';
import styled from 'styled-components';
import { Outlet, Route, Routes } from 'react-router-dom';
import RouterRender from './theme/RouterRender';
// import Login from './theme/Login';
// import Login from './components/Login';
import ProtectedRoute from './theme/Protected';
import NewLogin from './components/Login/NewLogin';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;  /* sidebar + main */
  grid-template-rows: 64px 1fr 60px; /* header + content + footer */
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
 overflow-x: hidden;
`;

const HeaderWrapper = styled.header`
  grid-area: header;
  // display: flex;
  align-items: center;
  justify-content: space-between; /* logo left, menu right */
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 24px;
  height: 64px;
  z-index: 2;
`;




const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  background: ${({ theme }) => theme.colors.sidebar};
  // padding: 16px;
`;

const Main = styled.main`
  grid-area: main;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
`;

const FooterWrapper = styled.footer`
  grid-area: footer;
  padding: 16px;
  background: ${({ theme }) => theme.colors.footer};
`;

const AppTest = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Layout>
        <HeaderWrapper>
          <Header onLogout={handleLogout} />
        </HeaderWrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <MovingBackground />
        <Main>
          <h1>Welcome to React Starter</h1>
          <p>Use the theme switcher in header to change colors.</p>
          <RouterRender />
          <AnimatedButton>Click me</AnimatedButton>
        </Main>
        <FooterWrapper>Footer area</FooterWrapper>
      </Layout>
    </ProtectedRoute>
  );
}

export default memo(AppTest)