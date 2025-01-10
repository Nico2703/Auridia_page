import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Intermediario from "./context/pageContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <Intermediario>
        <App/>
    </Intermediario>
);