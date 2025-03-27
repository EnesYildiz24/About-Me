import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AboutMe.css';
import SkillsSlider from './SkillsSlider';

interface Benefit {
  title: string;
  description: string;
}

const benefitsData: Benefit[] = [
  {
    title: "Moderne Technologien",
    description: "Fundierte Kenntnisse in TypeScript, React und weiteren modernen Tools."
  },
  {
    title: "Kreative Problemlösung",
    description: "Innovative Ansätze zur Lösung komplexer Herausforderungen."
  },
  {
    title: "Teamfähigkeit",
    description: "Erfolgreiche Zusammenarbeit und Kommunikation in diversen Projekten."
  },
  {
    title: "Stetiges Lernen",
    description: "Engagement, kontinuierlich neue Technologien und Methoden zu erlernen."
  }
];

const Navbar: React.FC = () => {
  return (
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
  );
};

const AboutMe: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="about-me-wrapper">
        <div className="container my-5">
          {/* Über mich-Sektion */}
          <section id="aboutme" className="mb-5">
            <header className="text-center mb-5">
              <h1 className="display-4 text-light">Über mich</h1>
            </header>
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">
                  Mein Name ist Enes Yildiz und ich studiere Medieninformatik an der BHT in Berlin. 
                  In meinem Studium und in eigenen Projekten habe ich fundierte Kenntnisse in modernen Webtechnologien erworben – 
                  insbesondere in TypeScript, JavaScript, Java, React, HTML, CSS sowie in Datenbanksystemen wie MySQL und MongoDB.
                </p>
                <p className="card-text">
                  Im Rahmen meines Studiums habe ich unter anderem ein Lernprojekt realisiert: einen Marketplace für Spiele, 
                  der nach dem Vorbild von Plattformen wie Steam entwickelt wurde. Mit diesem Projekt konnte ich praxisnah den Umgang 
                  mit TypeScript, React und MongoDB erlernen und meine Fähigkeiten in der Webentwicklung deutlich erweitern.
                </p>
                <p className="card-text">
                  Neben meiner technischen Expertise lege ich großen Wert auf kreative Problemlösungen und eine lösungsorientierte Arbeitsweise. 
                  Meine Projekte dokumentieren nicht nur meinen technischen Fortschritt, sondern auch mein Engagement, stetig Neues zu lernen.
                </p>
                <p className="card-text">Credits an ChatGPT für den Langweiligen Text</p>
              </div>
            </div>
          </section>

          {/* Fähigkeiten-Sektion mit Slider */}
          <section id="skills" className="mb-5">
            <h2 className="mb-4 text-center text-light">Fähigkeiten</h2>
            <SkillsSlider />
          </section>

          {/* Benefits-Sektion */}
          <section id="benefits" className="mb-5">
            <h2 className="mb-4 text-center text-light">Meine Benefits</h2>
            <div className="row">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="col-md-3 mb-4">
                  <div className="card h-100 shadow-sm benefit-card">
                    <div className="card-body text-center">
                      <h5 className="card-title text-secondary">{benefit.title}</h5>
                      <p className="card-text">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="text-center text-light">
            <small>© 2025 Enes Yildiz. Alle Rechte vorbehalten.</small>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
