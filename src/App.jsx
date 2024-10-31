import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import Blogs from "./pages/Blogs";
import CaseStudies from "./pages/CaseStudies";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <Routes>
          <Route
            element={
              <AppLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          >
            <Route path="/" index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
