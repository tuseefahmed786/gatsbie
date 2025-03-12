import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SideBar from '../layout/SideBar';
import Navbar from '../layout/Navbar';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Groups from '../pages/Groups';
import People from '../pages/People';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex h-[90vh]">
        <SideBar />
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
