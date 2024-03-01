// src/routes/IndexRoute.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Home from '../pages/Home';
import MenTshirtPage from '../pages/shirt/tshirt/MenTshirtPage';
import MenCasualShirtPage from '../pages/shirt/casualshirt/MenCasualShirtPage';
import MenFormalShirtPage from '../pages/shirt/formalshirt/MenFormalShirtPage';
import MenFullKurtaShirtPage from '../pages/shirt/fullkurtashirt/MenFullKurtaShirtPage';

function IndexRoute() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/men-top-wear/t-shirt" element={<MenTshirtPage />} />
          <Route path="/men-top-wear/casual" element={<MenCasualShirtPage />} />
          <Route path="/men-top-wear/formal" element={<MenFormalShirtPage />} />
          <Route path="/men-top-wear/full-kurta" element={<MenFullKurtaShirtPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default IndexRoute;
