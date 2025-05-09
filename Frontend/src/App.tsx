import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import QuizPage from './pages/QuizPage';
import PasswordPage from './pages/PasswordPage';
import './AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/100600" element={<QuizPage />} />
        <Route path="/password" element={<PasswordPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
