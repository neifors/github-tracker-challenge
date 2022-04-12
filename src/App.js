import React, { useState } from "react";
import { Header } from "./components/";

import "./normalize.css";
import "./index.css";

export default function App() {
  const [data, setData] = useState();

  const sendRequest = async (account) => {
    let resp = await fetch(`https://api.github.com/users/${account}/repos`);
    let gitData = await resp.json();
    setData(gitData);
    console.log(data);
  };
  
  return (
    <>
      <Header sendRequest={sendRequest} />
      {data && <p>Hello {data[0].name}</p>}
    </>
  );
}
