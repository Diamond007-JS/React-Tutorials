import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import TestPage from "../pages/Extra";

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/*' element={<Navigate to='/home' replace={true} />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
