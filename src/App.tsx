import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import TitleBar from "./components/TitleBar";

function App() {
  return (
    <div>
      <TitleBar />
      <main className="container">
        <h1>Welcome to RustTerminal</h1>
      </main>
    </div>
  );
}

export default App;
