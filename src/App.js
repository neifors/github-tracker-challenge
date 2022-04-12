import React, { useState } from "react";
import { Header } from "./components/";

import "./normalize.css";
import "./index.css";

export default function App() {
  const [data, setData] = useState();
  const [user, setUser] = useState();

  const sendRepoRequest = async (account) => {
    let resp = await fetch(`https://api.github.com/users/${account}/repos`);
    let gitData = await resp.json();
    setData(gitData);
    console.log(data);
  };
  const sendUserRequest = async (account) => {
    let resp = await fetch(`https://api.github.com/users/${account}`);
    let gitData = await resp.json();
    setUser(gitData);
    console.log(user);
  };

  return (
    <>
      <Header
        sendUserRequest={sendUserRequest}
        sendRepoRequest={sendRepoRequest}
      />
      {user && <p>Hello {user.name}</p>}
      {data && <p>Hello {data[0].name}</p>}
    </>
  );
}
