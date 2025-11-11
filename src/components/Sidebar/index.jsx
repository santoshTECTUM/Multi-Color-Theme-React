import React, { memo, useState } from "react";
import styled from "styled-components";
import { Home, User, Settings, ChevronDown, ChevronRight } from "lucide-react"; // icon library
import { useSelector } from "react-redux";
import { menuObject } from "../HeaderObject";
import { useLocation, useNavigate } from "react-router-dom";
const Side = styled.aside`
  grid-area: sidebar;
  padding: 16px;
  background: ${({ theme }) => theme.colors.sidebar};
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 4px;
  transition: all 0.25s ease;   /* smooth hover effect */
  background: ${({ active, theme }) =>
    active ? theme.colors.secondary : "transpatrent"};
  color: ${({ active, theme }) =>
    active ? "#fff" : theme.colors.text};
// /* shutter layer */
//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -100%; /* start off-screen */
//     width: 100%;
//     height: 100%;
//     background: ${({ theme }) => theme.colors.surface};
//     transition: left 0.35s ease;
//     z-index: 0; /* stays behind text/icons */
//   }

//   &:hover::before {
//     left: 0; /* slide in from left */
//   }


  &:hover {
    background: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.surface};
    transform: scale(1.05);      /* zoom effect */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12); /* subtle lift */
  }

  // /* keep text/icons above shutter */
  // * {
  //   position: relative;
  //   z-index: 1;
  // }
  svg {
    margin-right: 8px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: 0.3s ease scale(1.1);       /* icon zooms too */
  }
`;

const SubMenu = styled.div`
  padding-left: 24px;
  margin-top: 4px;
  margin-bottom: 8px;
  display: ${({ open }) => (open ? "block" : "none")};
`;
const ActiveHeader = styled.div`
    padding: 10px 18px;
    margin-top: 4px;
    border: none;
    border-radius: 2px;
    margin-bottom: 8px;
    background: ${({ theme, active }) =>
    theme.colors.primary};
    color: white;
    text-align: center;
`;


const Sidebar = ({ showSidebar }) => {
  const navigate = useNavigate();
  const headerName = useSelector((s) => s.header.name);
  const headerIndex = useSelector((s) => s.header.id);
  const location = useLocation()
  const menuItems = menuObject[headerIndex]?.sideMenu || []; // Assuming menuObject is imported or defined elsewhere
  const [openMenu, setOpenMenu] = useState(menuItems && menuItems[0]?.name || null);
  showSidebar(menuItems?.length ? true : false)
  const toggleMenu = (menu, index) => {
    console.log("login menu:", index, menu, menuItems, menuItems[index - 1],);
    // if (!(index && menuItems[index - 1])) {
    //   return
    // }
    setOpenMenu(openMenu === menu.name ? menuItems[index - 1].name : menu.name);
    let url = openMenu === menu?.name ? -1 : menu.url
    console.log("navigate to :", url, "location", location);
    navigate(url)
  };




  // console.log("header--Name", headerName, "headerIndex", headerIndex, "menuItems", menuItems, "menuObject", menuObject[headerIndex]?.sideMenu);

  return (
    <>
      <ActiveHeader key={headerName}>
        {headerName || "Welcome!"}
      </ActiveHeader>
      <Side>
        <nav>
          {menuItems?.length ? menuItems?.map((item, index) => (
            <MenuItem key={index} active={openMenu === item.name} onClick={() => toggleMenu(item, index)}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {item.icons} {item.name}
              </div>
            </MenuItem>
          )) : ""}

          {/* <div>
            <MenuItem
              onClick={() => toggleMenu("profile")}
              active={openMenu === "profile"}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <User size={18} /> Profile
              </div>
              {openMenu === "profile" ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </MenuItem>

            <SubMenu open={openMenu === "profile"}>
              <MenuItem>View Profile</MenuItem>
              <MenuItem>Edit Profile</MenuItem>
            </SubMenu>
          </div>

          <MenuItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Settings size={18} /> Settings
            </div>
          </MenuItem> */}
        </nav>
      </Side>
    </>

  );
}
export default memo(Sidebar)
