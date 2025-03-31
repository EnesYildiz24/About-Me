// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import QuizPage from './pages/QuizPage';
import PasswordPage from './pages/PasswordPage';
import './AboutMe.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/100600" element={<QuizPage />} />
      <Route path="/password" element={<PasswordPage />} />
    </Routes>
  );
};

export default App;
