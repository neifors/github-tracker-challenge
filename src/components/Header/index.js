import React, { useState } from "react";
import { Icon } from "../Icon";

import "./index.css";

export function Header({ sendRequest }) {
  const [account, setAccount] = useState("");

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest(account);
    setAccount("");
  };
  return (
    <header className="header">
      <div className="tracker">
        <Icon className="logo" />
        <h1 className="title">Github Tracker App</h1>
      </div>

      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            className="searchBar"
            type="text"
            onChange={handleAccountChange}
            value={account}
            placeholder="Search for an Account"
          />
        </form>
      </div>
    </header>
  );
}
