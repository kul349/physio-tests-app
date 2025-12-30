import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 
import "./index.css";
import AppRoutes from "./rotues";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
