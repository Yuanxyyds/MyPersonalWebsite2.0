import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./style/style.css";
import "./style/Navbar.css";
import "./style/Footer.css";
import "./style/App.css";
import "./style/Home.css"
import "./style/Pre.css"
import "./style/About.css"
import "./style/FileDropUpload.css"
import "./style/FoodImageClassify.css"
import "./style/Server.css"
import "./style/StevenAI.css"
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
