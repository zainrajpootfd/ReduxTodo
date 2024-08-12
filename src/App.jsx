import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>Learn with redux ToolKit</h1>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;
