import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import AppRoutes from "./rotues";

function App() {
  useEffect(() => {
   
    document.dispatchEvent(new Event("custom-render-trigger"));
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
