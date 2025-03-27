import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AboutMe.css';
import Navbar from './Navbar';

const WelcomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="welcome-wrapper d-flex align-items-center justify-content-center">
        <div className="hero-content container text-center">
          <h1 className="display-3 text-light mb-4 animate__animated animate__fadeInDown">
            Willkommen auf meiner Website
          </h1>
          <p className="lead text-light mb-4 animate__animated animate__fadeInUp">
            Entdecke innovative Projekte und erfahre mehr über meine außergewöhnliche Proj.. ach schau einfach selbst.
          </p>
          <Link to="/projects" className="btn btn-primary btn-lg animate__animated animate__fadeInUp">
            Jetzt Projekte ansehen
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
