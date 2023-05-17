import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createClient, Provider, cacheExchange, fetchExchange } from "urql";
import { Auth0Provider } from "@auth0/auth0-react";

const client = createClient({
  url: import.meta.env.VITE_API_URL || "http://localhost:4000/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <Auth0Provider
        domain="dev-fv0pjqq4.eu.auth0.com"
        clientId="qTbgWcO3F3fzEj5BgGEavC2SoAoXAux7"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
