import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store.ts";
import { ThemeProvider } from "./context/theme.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
