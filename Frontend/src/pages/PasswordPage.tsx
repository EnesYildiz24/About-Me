import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const PasswordPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<React.ReactNode>("");
  const countRef = useRef(0);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("******5938");
    if (password === "1006005938") {
      window.open("https://github.com/EnesYildiz24", "_blank");
      navigate("/");
    } else {
      countRef.current++;
      if (countRef.current >= 3) {
        setError(
          <>
            <p>Falsches Passwort.</p>
            <p>
              Ein Schritt zurück ist oft der Anfang von zwei nach vorn. <br />
              Die Wahrheit liegt im Verborgenen – oder in der Konsole.
            </p>
          </>
        );
      } else {
        setError(
          <>
            <p>Falsches Passwort.</p>
            <p>Ein Schritt zurück ist oft der Anfang von zwei nach vorn.</p>
          </>
        );
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1 className="text-light">Passwort erforderlich</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Passwort eingeben"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ maxWidth: "300px", margin: "0 auto" }}
          />
          <div className="d-flex justify-content-center gap-3">
            <button type="submit" className="btn btn-success">
              Öffnen
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate(-1)}
            >
              Zurück
            </button>
          </div>
        </form>

        {error && <div className="text-danger mt-3">{error}</div>}
      </div>
    </>
  );
};

export default PasswordPage;
