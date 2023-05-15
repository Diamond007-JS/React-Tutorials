import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainRouter from "./routers";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/*' element={<MainRouter />} />
    </Routes>
  </Router>
);

export default App;
