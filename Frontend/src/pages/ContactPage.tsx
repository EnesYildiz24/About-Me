import React, { useState } from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AboutMe.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Erstelle ein Request-Objekt mit den Formulardaten
    const requestData = {
      ...formData,
      id: Date.now(),
      username: formData.email.toLowerCase(),
    };

    try {
      // Zuerst in der Datenbank speichern
      const response1 = await fetch('http://localhost:5001/request', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      if (!response1.ok) {
        alert('Fehler beim Speichern der Anfrage');
        return;
      }

      // Anschließend den Mailversand auslösen
      const response = await fetch('http://localhost:5001/sendmail', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        alert('E-Mail wurde versendet');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Fehler beim Senden der E-Mail');
      }
    } catch (error) {
      console.error("Fehler beim Fetch:", error);
      alert("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-wrapper d-flex align-items-center justify-content-center">
        <div className="contact-content container text-center animate__animated animate__fadeIn">
          <h1 className="display-4 fw-bold mb-4 text-light">Kontakt</h1>
          <p className="lead mb-5 text-light">Ich freue mich auf deine Nachricht!</p>
          <form onSubmit={handleSubmit} className="text-start">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Dein Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Deine E-Mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                className="form-control"
                rows={5}
                placeholder="Deine Nachricht"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success btn-lg w-100">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
