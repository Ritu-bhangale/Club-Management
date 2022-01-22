import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="vertical">
        <div className="vertical-club-detail">
          <img src="/Assets/logo.png" alt="" />
          <h1>Club Name</h1>
          <p>Name of wing</p>
        </div>
        <div className="navbar-vertical">
        {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Navbar;