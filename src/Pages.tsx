import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ExamsByProfessor from './pages/Views/ExamsByProfessor';
import ExamsByCategory from './pages/Views/ExamsByCategory';
import ExamsBySubject from './pages/Views/ExamsBySubject';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/views/by-professor" element={<ExamsByProfessor />} />
      <Route path="/views/by-subject" element={<ExamsBySubject />} />
      <Route path="/exams" element={<ExamsByCategory />} />
    </Routes>
  );
};

export default Pages;
