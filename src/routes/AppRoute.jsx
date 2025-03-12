import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Services from '../pages/Services';
import Groups from '../pages/Groups';
import People from '../pages/People';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex h-[90vh]">
        <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="/home/services" />} />
            <Route path="/home" element={<Navigate to="/home/services" />} />
            <Route path="/home/groups" element={<Groups />} />
            <Route path="/home/people" element={<People />} />
            <Route path="/home/services" element={<Services />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoute;
