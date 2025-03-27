import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AboutMe.css';

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Meine Seite</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Navigation umschalten"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">Über mich</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projekte</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Kontakt</Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-5 text-center">
        <h1 className="display-4 text-light">Projekte</h1>
        <p className="lead text-light">
          Hier findest du meine Projekte auf GitHub.
        </p>
        <a 
          href="https://github.com/EnesYildiz24?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-light"
        >
          GitHub Repositories ansehen
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
