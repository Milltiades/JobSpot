import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/redux.ts";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
  >
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </AuthProvider>
);
