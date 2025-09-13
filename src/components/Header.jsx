import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/slices/themeSlice';
import themes from '../theme/themes';
const Bar = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background: rgba(255, 255, 255, 0.1);
  // backdrop-filter: blur(12px);
  // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 24px;
  height: 64px;
  z-index: 2;
`;

// Right section (theme switch + menu)
const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

// Main menu
const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;

  li {
    position: relative;

    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      font-weight: 500;
      padding: 8px 12px;
      border-radius: 8px;
      transition: all 0.3s ease;
      transition: all 0.3s ease;
      transform-origin: center;
      &:hover {
        background: rgba(255, 255, 255, 0.15);
        color: ${({ theme }) => theme.colors.accent};
        transform: translateY(-2px) scale(1.1); /* lift + zoom */
      }
    }
a:hover {
  background: rgba(255, 255, 255, 0.15);
  color: ${({ theme }) => theme.colors.accent};
  transform: translateY(-2px) scale(1.1);
}
    /* Submenu container */
    ul {
      list-style: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 10px 0;
      margin: 0;
      opacity: 0;
      transform: translateY(10px);
      pointer-events: none;
      transition: all 0.3s ease;
      min-width: 160px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

      li {
        padding: 6px 16px;

        a {
          display: block;
          padding: 6px 12px;
          border-radius: 8px;

          &:hover {
            background: rgba(255, 255, 255, 0.2);
            color: ${({ theme }) => theme.colors.accent};
          }
        }
      }
    }

    /* Show submenu on hover */
    &:hover > ul {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }
`;

export default function Header() {
  const dispatch = useDispatch();
  const themeName = useSelector((s) => s.theme.name);
  const theme = themes[themeName] || themes.light;
  const [activeMenu, setActiveMenu] = useState("home"); // default active link

  return (
    <Bar>
      <div style={{ fontWeight: 700 }}>
        Logo
        <select
          value={themeName}
          onChange={(e) => dispatch(setTheme(e.target.value))}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="ocean">Ocean</option>
          <option value="sunset">Sunset</option>
          <option value="forest">Forest</option>
          <option value="neon">Neon</option>
        </select>
      </div>

      <RightSection>
        <Menu>
          <li>
            <a
              href="#home"
              onClick={() => setActiveMenu("home")}
              style={{
                color:
                  activeMenu === "home"
                    ? theme.colors.accent
                    : undefined,
                fontWeight: activeMenu === "home" ? "700" : "500",
              }}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setActiveMenu("about")}
              style={{
                color:
                  activeMenu === "about"
                    ? theme.colors.accent
                    : undefined,
                fontWeight: activeMenu === "about" ? "700" : "500",
              }}
            >
              About
            </a>
            <ul>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#history">History</a></li>
              <li><a href="#vision">Vision & Mission</a></li>
            </ul>
          </li>

          <li>
            <a
              href="#services"
              onClick={() => setActiveMenu("services")}
              style={{
                color:
                  activeMenu === "services"
                    ? theme.colors.accent
                    : undefined,
                fontWeight: activeMenu === "services" ? "700" : "500",
              }}
            >
              Services
            </a>
            <ul>
              <li><a href="#web">Web Development</a></li>
              <li><a href="#uiux">UI/UX Design</a></li>
              <li><a href="#cloud">Cloud Solutions</a></li>
            </ul>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setActiveMenu("contact")}
              style={{
                color:
                  activeMenu === "contact"
                    ? theme.colors.accent
                    : undefined,
                fontWeight: activeMenu === "contact" ? "700" : "500",
              }}
            >
              Contact
            </a>
            <ul>
              <li><a href="#support">Support</a></li>
              <li><a href="#sales">Sales</a></li>
            </ul>
          </li>
        </Menu>
      </RightSection>
    </Bar>
  );
}
