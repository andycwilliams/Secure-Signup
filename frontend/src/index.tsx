// React Imports
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";
// Component Imports
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// Context Imports
import { AuthProvider } from "./context/AuthProvider";
// Dependency Imports
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
);

// reportWebVitals();
