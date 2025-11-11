import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store/slices/themeSlice';
import { setHeader } from '../../store/slices/headerSlice';
import ThemeColor from '../../ThemeColor';
import { menuObject } from '../HeaderObject';
import { useNavigate } from 'react-router-dom';

const Bar = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 64px;
  z-index: 2;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
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
      transform-origin: center;

      &:hover {
        background: rgba(255, 255, 255, 0.15);
        color: ${({ theme }) => theme.colors.accent};
        transform: translateY(-2px) scale(1.1);
      }
    }

    /* Submenu styling */
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

const Span = styled.span`
  margin: 5px;
  cursor: pointer;
`;

export default function Header({ onLogout }) {
  const dispatch = useDispatch();
  const themeName = useSelector((s) => s.theme.name);
  const theme = ThemeColor[themeName] || ThemeColor.light;
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (menu, index) => {
    dispatch(setHeader({ id: index, name: menu.name }));
    setActiveMenu(menu.name);

    // Navigation logic:
    if (menu.submenu && menu.submenu.length > 0) {
      // If submenu exists, stay here — submenu handled separately
      return;
    }

    const url =
      menu.sideMenu?.[0]?.url || menu.url || '/'; // fallback URL
    navigate(url);
  };

  const handleSubmenuClick = (sub) => {
    if (sub.url) {
      navigate(sub.url);
    }
  };

  return (
    <Bar>
      <div style={{ fontWeight: 700 }}>
        <Span onClick={onLogout}>Logo</Span>
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
          {menuObject.map((menu, index) => {
            const hasSubmenu = menu.submenu && menu.submenu.length > 0;
            const hasSideMenu = menu.sideMenu && menu.sideMenu.length > 0;

            return (
              <li key={index}>
                <a
                  onClick={() => handleMenuClick(menu, index)}
                  style={{
                    color:
                      activeMenu === menu.name
                        ? theme.colors.accent
                        : theme.colors.text,
                    fontWeight: activeMenu === menu.name ? '700' : '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                  }}
                >
                  {menu.icons && (
                    <span title={menu.isTooltips ? menu.name : undefined}>
                      {menu.icons}
                    </span>
                  )}
                  {!menu.isTooltips && <span>{menu.name}</span>}
                </a>

                {/* Submenu rendering */}
                {hasSubmenu && (
                  <ul>
                    {menu.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <a
                          onClick={() => handleSubmenuClick(sub)}
                          style={{ cursor: 'pointer' }}
                        >
                          {sub.icons && <span>{sub.icons}</span>}
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {/*  Handle case where both submenu & sidemenu empty */}
                {!hasSubmenu && !hasSideMenu && !menu.url && (
                  <ul>
                    <li>
                      <a style={{ opacity: 0.5, pointerEvents: 'none' }}>
                        No links
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </Menu>
      </RightSection>
    </Bar>
  );
}
