import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom"
//login
// import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from "./context/Auth";
//Main.jsx is Indexjs or jsx.

ReactDOM.render(
  <TransactionsProvider>
    <Router>
        <App />
    </Router>
  </TransactionsProvider>,
  document.getElementById("root"),
);