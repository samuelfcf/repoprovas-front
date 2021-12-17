import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Views from './pages/Views/Views';
import ExamsByProfessor from './pages/Views/ExamsByProfessor';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/views" element={<Views />} />
      <Route path="/views/by-professor" element={<ExamsByProfessor />} />
    </Routes>
  );
};

export default Pages;
