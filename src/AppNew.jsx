import React, { memo, useState } from 'react';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import MovingBackground from './components/MovingBackground';
import AnimatedButton from './components/AnimatedButton';
import styled from 'styled-components';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
// import Login from './theme/Login';
// import Login from './components/Login';
import ProtectedRoute from './components/Protected';
import NewLogin from './components/Login/NewLogin';
import Sidebar from './components/Sidebar';
import Sso from './components/Login/Sso';

const Layout = styled.div`
  display: grid;
  grid-template-columns: ${({ showSidebar }) =>
    showSidebar ? '240px 1fr' : '1fr'};
  grid-template-rows: 64px 1fr 50px;
  grid-template-areas: ${({ showSidebar }) =>
    showSidebar
      ? `"header header"
         "sidebar main"
         "footer footer"`
      : `"header"
         "main"
         "footer"`};
  min-height: 100vh;
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

const AppNew = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <>
      <Routes>
        {/* Login Page */}

        <Route path="/login" element={<Sso onLogin={handleLogin} />} />

        {/* Protected Layout */}

        {/* dynamic routes rendered by Redux state */}

        <Route
          path="/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout showSidebar={isSidebarVisible}>
                <HeaderWrapper>
                  <Header onLogout={handleLogout} />
                </HeaderWrapper>
                <SidebarWrapper style={{ display: isSidebarVisible ? 'block' : 'none' }}>
                  <Sidebar showSidebar={setIsSidebarVisible} />
                </SidebarWrapper>
                <MovingBackground />
                <Main>

                  <MainContent />
                  {/* <AnimatedButton>Click me</AnimatedButton> */}
                </Main>
                <FooterWrapper>Footer area</FooterWrapper>
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* <Route path="*" element={<h2>Welcome! Back Page not found.</h2>} /> */}

      </Routes>


    </>
  );
}

export default memo(AppNew)