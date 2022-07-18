import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import { NavItems } from "./NavItems";
import Dropdown from "./Dropdown";
import Main from "./components/main";




function Nav() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
      
        <Link to="/" className="navbar-logo">
          
          <img width={250} src="./logo.png"/>
          
        </Link>
        <ul className="nav-items">
          {NavItems.map((item) => {
            if (item.title === "Courses") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
          <Main/>
          
        </ul>
        
        
      </nav>
    </>
  );
}


export default Nav;