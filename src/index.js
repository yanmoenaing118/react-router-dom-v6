import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Home from "./routes/home";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <Home />
            }
          />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Nothing is here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
