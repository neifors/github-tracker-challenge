import React, { useState } from "react";
import { Header, DetailsCard } from "./components/";

import "./normalize.css";
import "./index.css";

export default function App() {
  const [data, setData] = useState();
  const [user, setUser] = useState();

  const sendRequest = async (account) => {
    let repoResp = await fetch(`https://api.github.com/users/${account}/repos`);
    let repoData = await repoResp.json();
    let userResp = await fetch(`https://api.github.com/users/${account}`);
    let gitData = await userResp.json();
    setUser(gitData);
    setData(repoData);
  };

  return (
    <>
      <Header sendRequest={sendRequest} />
      {user && <DetailsCard user={user} />}
      {data && <p>Hello {data[0].name}</p>}
    </>
  );
}
