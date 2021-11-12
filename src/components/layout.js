
import React from "react"
import "./layout.css"
import MainMenu from "./menu"
import Footer from "./footer"

import './../../sass/common.scss';

const Layout = ({ children }) => (
  <div className="main-container">
    <MainMenu />
     {children}
    <Footer />
  </div>
)

export default Layout
