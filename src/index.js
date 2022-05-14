import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContextProvider } from "./UserContext/UserContext";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
