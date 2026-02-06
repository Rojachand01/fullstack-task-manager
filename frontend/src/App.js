import React from "react";
import Login from "./components/Login";
import Tasks from "./components/Tasks";

function App() {
  const token = localStorage.getItem("token");

  return token ? <Tasks /> : <Login />;
}

export default App;
