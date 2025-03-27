import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import './AboutMe.css';
import ContactPage from './pages/ContactPage';
import QuizPage from './pages/QuizPage';
import PasswordPage from './pages/PasswordPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/100600" element={<QuizPage />} />
        <Route path="/password" element={<PasswordPage />} />
      </Routes>
    </Router>
  );
};

export default App;
