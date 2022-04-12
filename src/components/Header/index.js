import React from "react";
import { Icon } from "../Icon";

import "./index.css";

export function Header() {
  return (
    <header className="header">
      <div className="tracker">
        <Icon className="logo" />
        <h1 className="title">Github Tracker App</h1>
      </div>

      <div className="search">
        <input type="text" placeholder="Search for a Github Account" />
      </div>
    </header>
  );
}
