import { useState } from "react";
// import { createElement } from "react";
// import { Fragment } from "react";
import "./assets/css/style.css";
// import { useEffect } from "react";
import Button from "./components/Button";
import Tab from "./components/Tab";
// import "./assets/css/index.scss";
// import styles from "./assets/css/App.module.css";

function App() {
  // const todos = ["todo1", "todo2", "todo3"];

  // const style = {
  //   color: "red",
  //   fontWeights: "bold",
  //   textAlingJustify: "center",
  //   justifyContent: "between",
  //   backgroundColor: "yellow",
  // };

  /*
  const button = createElement(
    Btn,
    {
      text: "Button-2",
    },
    null
  );
  const todos = ["todo1", "todo2", "todo3"];
  const h1 = createElement("h1", null, "dijitrend.com");
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => createElement("li", null, todo))
  );
  return createElement(
    "main",
    {
      id: "main",
      className: "test",
    },
    h1,
    ul,
    button
  );


  const searchFunction = () => {
    alert("hello");
  };

*/

  // function Bitton(props) {
  //   return <button className="bg-zinc-800 text-white">{props.text}</button>;
  // }

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
      <br />
    </main>
  );
}

export default App;
