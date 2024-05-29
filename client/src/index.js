import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PrimeReactProvider } from 'primereact/api';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
