import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Store";
createRoot(document.getElementById('root')).render(
  <StrictMode>
          <Provider store={Store}>
            <App/>
          </Provider>
  </StrictMode>
)