import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AboutMe.css';

interface Skill {
  name: string;
  description: string;
  details: string;
}

const skillsData: Skill[] = [
  {
    name: "TypeScript",
    description: "Starke Typisierung und Skalierbarkeit für moderne Webanwendungen.",
    details: "Ermöglicht frühzeitige Fehlererkennung und verbessert die Codequalität."
  },
  {
    name: "JavaScript",
    description: "Moderne Frontend-Entwicklung und dynamische Benutzeroberflächen.",
    details: "Vielseitig einsetzbar – sowohl im Frontend als auch im Backend."
  },
  {
    name: "Java",
    description: "Robuste objektorientierte Programmierung für komplexe Systeme.",
    details: "Wird in Unternehmensanwendungen und Android-Entwicklungen eingesetzt."
  },
  {
    name: "React",
    description: "Effiziente UI-Entwicklung und State-Management in React.",
    details: "Komponentenbasiert und ideal für Single-Page-Applications."
  },
  {
    name: "HTML & CSS",
    description: "Responsive, moderne Web-Designs und ansprechende Benutzeroberflächen.",
    details: "Ermöglicht barrierefreie und mobilfreundliche Websites."
  },
  {
    name: "MySQL",
    description: "Erfahrung mit relationalen Datenbanken für strukturierte Daten.",
    details: "Optimiert für komplexe Abfragen und Datenintegrität."
  },
  {
    name: "MongoDB",
    description: "NoSQL-Datenbankkenntnisse für flexible und skalierbare Anwendungen.",
    details: "Bietet hohe Performance bei großen Datenmengen und unstrukturierten Daten."
  }
];

const SkillsSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Dupliziere die Skills, um eine Endlosschleife zu simulieren
  const duplicatedSkills = [...skillsData, ...skillsData];

  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current || !sliderRef.current) return;

    const interval = setInterval(() => {
      // Hole ein lokales Snapshot des Elements
      const slider = sliderRef.current;
      if (slider) {
        slider.scrollBy({ left: -2, behavior: 'smooth' });
        if (slider.scrollLeft <= 0) {
          slider.scrollLeft = slider.scrollWidth / 2;
        }
      }
    }, 50);
    autoScrollIntervalRef.current = interval;
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, []);

  const handleCardClick = (index: number) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  return (
    <div className="skills-slider-wrapper position-relative">
      <div
        className="skills-slider d-flex overflow-auto"
        ref={sliderRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {duplicatedSkills.map((skill, index) => {
          const isExpanded = expandedSkill === index;
          return (
            <div
              key={index}
              className={`card skill-card mx-1 ${isExpanded ? 'expanded' : ''}`}
              style={{
                width: '250px',
                height: isExpanded ? 'auto' : '125px', // 2:1 Verhältnis
                flexShrink: 0,
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <h5 className="card-title text-secondary mb-1" style={{ fontSize: '1.1rem' }}>
                  {skill.name}
                </h5>
                <p className="card-text mb-0" style={{ fontSize: '0.9rem' }}>
                  {skill.description}
                </p>
                {isExpanded && (
                  <div className="skill-details mt-2">
                    <p className="small mb-0" style={{ fontSize: '0.85rem' }}>
                      {skill.details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSlider;
