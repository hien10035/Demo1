import React from "react";
import "./App.css";
import Content from "./components/content/index";
import Header from "./components/header/index";
import Menu from "./components/header/menu";
import Nav from "./components/header/nav";

function App() {
  return (
    <div className="App">
      <Menu />
      <Nav />
      {/*<Header />
      <Content />*/}
    </div>
  );
}

export default App;
