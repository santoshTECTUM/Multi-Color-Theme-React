import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MovingBackground from './components/MovingBackground';
import AnimatedButton from './components/AnimatedButton';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr 60px;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  min-height: 100vh;
`;

const Main = styled.main`
  grid-area: main;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
`;

export default function App(){
  return (
    <Layout>
      <Sidebar />
      <Header />
      <MovingBackground />
      <Main>
        <h1>Welcome to React Starter</h1>
        <p>Use the theme switcher in header to change colors.</p>
        <AnimatedButton>Click me</AnimatedButton>
      </Main>
      <footer style={{ gridArea: 'footer', padding: 16 }}>Footer area</footer>
    </Layout>
  );
}