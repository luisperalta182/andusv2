
import React, { useState } from "react";
import "./layout.css"
import MenuManager from "./menu/menuManager"
import Header from "./header"
import Footer from "./footer"

import './../../sass/common.scss';

const Layout = ({ children }) => (
  <div className="main-container">
    <MenuManager>
      <Header />
      {children}
      <Footer />
     </MenuManager>
      
  </div>
)

export default Layout
