import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AboutMe.css';

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_w9jmrlf',
          'template_20jitdj',
          formRef.current,
          'iOfBFPuKZ-RwSg5Fe'
        )
        .then(
          (result) => {
            console.log('Erfolg:', result.text);
            alert('E-Mail wurde erfolgreich gesendet!');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.error('Fehler:', error.text);
            alert('Fehler beim Senden der E-Mail. Bitte versuche es erneut.');
          }
        );
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-wrapper d-flex align-items-center justify-content-center">
        <div className="contact-content container text-center animate__animated animate__fadeIn">
          <h1 className="display-4 fw-bold mb-4 text-light">Kontakt</h1>
          <p className="lead mb-5 text-light">Ich freue mich auf Ihre Nachricht!</p>
          
          <form ref={formRef} onSubmit={handleSubmit} className="text-start">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Ihr Name / Firma"
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
                placeholder="Ihre E-Mail"
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
                placeholder="Ihre Nachricht"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Nur wenn du 'time' im Template verwenden willst */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

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
