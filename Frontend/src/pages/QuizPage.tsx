import React, { useState } from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../AboutMe.css";
import { useNavigate } from "react-router-dom";


const QuizPage: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [decoyPosition, setDecoyPosition] = useState<{
    left: string;
    top: string;
  }>({ left: "20%", top: "20%" });

  const handleStartQuiz = () => {
    setLoading(true);
    setTimeout(() => {
      setQuizStarted(true);
      setLoading(false);
    }, 3000);
  };

  const moveDecoy = () => {
    const left = Math.floor(Math.random() * 80) + "%";
    const top = Math.floor(Math.random() * 80) + "%";
    setDecoyPosition({ left, top });
  };
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        className="quiz-page-wrapper"
        style={{
          minHeight: "100vh",
          backgroundColor: "#343a40",
          paddingTop: "20vh",
        }}
      >
        {!quizStarted ? (
          <div className="container text-center">
            <div className="alert alert-danger" role="alert">
              <h1 className="display-4">Ähmm, ein Fehler ist aufgetreten!</h1>
              <h2 className="h4">Versuch es nocheimal</h2>
            </div>
            {!loading ? (
              <button
                className="btn btn-primary mt-4"
                onClick={handleStartQuiz}
              >
                GitHub Repo
              </button>
            ) : (
              <p className="text-light mt-4">Lade Repo...</p>
            )}
          </div>
        ) : (
          <div
            className="container text-center text-light"
            style={{ position: "relative", height: "50vh" }}
          >
            <h1 className="display-4 mb-4">GitHub Repo</h1>
            <p>Zum Repo in die Mitte klicken!</p>
            <button
              onClick={() => navigate("/password")}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                width: "100px",
                height: "50px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              Correct
            </button>
            {/* Sichtbarer, falscher Button, der bei jedem Klick umspringt */}
            <button
              className="btn btn-primary"
              onClick={moveDecoy}
              style={{
                position: "absolute",
                left: decoyPosition.left,
                top: decoyPosition.top,
                transition: "all 0.3s ease",
              }}
            >
              GitHub Repo
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default QuizPage;
