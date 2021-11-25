import React from "react";
import MenuButton from "./menuButton";
import MenuContent from "./menuContent";

export default function Menu() {
  return (
    <div className="menu-wrapper">
        <MenuButton />
        <MenuContent />
    </div>
  );
}