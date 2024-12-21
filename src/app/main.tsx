import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { setupStore } from "@/store";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render( 
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

