import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { TasksProviderWrapper } from "./context/tasks.context";


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("INSIDE INDEX.JS!!!!")
root.render(
  <Router>
    <AuthProviderWrapper>
      <TasksProviderWrapper>
      <App />
      </TasksProviderWrapper>
    </AuthProviderWrapper>
  </Router>
);
