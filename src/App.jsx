import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MovingBackground from './components/MovingBackground';
import AnimatedButton from './components/AnimatedButton';
import styled from 'styled-components';

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
  padding: 16px;
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

export default function App() {

  return (
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      {/* <MovingBackground /> */}
      <Main>
        <h1>Welcome to React Starter</h1>
        <p>Use the theme switcher in header to change colors.</p>
        <AnimatedButton>Click me</AnimatedButton>
      </Main>
      <FooterWrapper>
        Footer area
      </FooterWrapper>
    </Layout>


  );
}