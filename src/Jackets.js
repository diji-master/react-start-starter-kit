import { useState } from "react";
import "./assets/css/style.css";
import Button from "./components/Button";
import Tab from "./components/Tab";

function Jackets() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <main id="main" className="bg-zinc-200">
      <div className="p-5">
        <button onClick={() => setActiveTab(2)}>Aktif tab değiştir</button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profil">1. Tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2. Tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. Tab</Tab.Panel>
        </Tab>
      </div>
      <div className="p-5">
        <Button text="Ornek Buton" />
        <Button text="Ornek Buton" variant="success" />
        <Button text="Ornek Buton" variant="danger" />
        <Button text="Ornek Buton" variant="info" />
        {/*  */}
        <br />
        <Button>Children Buton</Button>
        <Button variant="success">2. tip Buton</Button>
        <Button variant="danger">2. tip Children Buton</Button>
        <Button variant="info">2. tip Children Buton</Button>
      </div>
      <br />
      {/* <h1 style={style} tabIndex="3">
        Dijitrend.com
      </h1> */}
      {/* <label htmlFor="search" tabIndex="2" onClick={searchFunction}>
        Arama
      </label> */}
      {/* <label htmlFor="search" tabIndex="2" onClick={() => alert("hello")}>
        Arama
      </label> */}
      {/* <input type="text" id="search" tabIndex="1" /> */}
      {/* <ul>
        {todos.map(function (todo, index) {
          return <li key={index}>{todo}</li>;
        })}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul> */}
    </main>
  );
}

export default Jackets;
