import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
 return (
  <BrowserRouter>
    <div>
    <NavBar />
    <Routes>
      <Route path="/*" element={<PublicRoute />} />
    </Routes>
    </div>
  </BrowserRouter>
 );
}

export default AppRouter;
