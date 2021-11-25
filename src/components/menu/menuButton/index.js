import React, { useContext } from "react";
import { MenuContext } from "../menuManager";
import cn from "classnames";

import "./style.scss";

export default function MenuButton() {
  const { setOpen, open } = useContext(MenuContext);

  return (
    <div className={cn("menu-button-wrap", { open })}>
      <button className="menu-button" onClick={() => setOpen(!open)}>
        <p></p>
        <span />
      </button>
    </div>
  );
}