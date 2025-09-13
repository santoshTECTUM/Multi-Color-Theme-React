import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/slices/themeSlice';
import themes from '../theme/themes';
import { menuObject } from './Header/HeaderObject';
import { setHeader } from '../store/slices/headerSlice';
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
  align-items:center;
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
  const [activeMenu, setActiveMenu] = useState("Tabel"); // default active link

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
          {menuObject.map((menu, index) => (
            <li key={index}>
              <a
                href={menu.url || "#"}
                onClick={() => {setActiveMenu(menu.name);dispatch(setHeader({id:index, name:menu.name}));}}
                style={{
                  color: activeMenu === menu.name ? theme.colors.accent : undefined,
                  fontWeight: activeMenu === menu.name ? "700" : "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {menu.icons && (
                  <span title={menu.isTooltips ? menu.name : undefined}>
                    {menu.icons}
                  </span>
                )}
                {/* Conditionally hide or show menu name */}
                {!menu.isTooltips && <span>{menu.name}</span>}
              </a>

              {menu.submenu && menu.submenu.length > 0 && (
                <ul key={index}>
                  {menu.submenu.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <a href={sub.url || "#"}>
                        {sub.icons && <span>{sub.icons}</span>}
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </Menu>
      </RightSection>
    </Bar>
  );
}
