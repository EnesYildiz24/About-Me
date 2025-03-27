import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import requestRouter from "./routes/request";
import { configureCORS } from "./configCors";
import dotenv from "dotenv";
import { sendMailWithAttachment } from "./mailer";

dotenv.config(); // Muss ganz oben stehen!

const app = express();

// CORS-Konfiguration anwenden
configureCORS(app);

// Middleware
app.use(cookieParser());
app.use(express.json());

// Datenbankverbindung
mongoose.connect("mongodb://localhost:27017/RequestDB")
  .then(() => console.log("✅ MongoDB verbunden."))
  .catch((err) => console.error("❌ MongoDB Fehler:", err));

// Routen registrieren
app.use("/request", requestRouter);

// Endpoint, um den Mailer auszulösen
app.post('/sendmail', (req: Request, res: Response): void => {
  (async () => {
    try {
      const { email, message } = req.body;
      if (!email || !message) {
        res.status(400).send('Empfänger-E-Mail und Nachricht müssen angegeben werden.');
        return;
      }
      await sendMailWithAttachment(email, message);
      res.send('E-Mail wurde verschickt');
    } catch (err) {
      console.error("Fehler im /sendmail-Endpunkt:", err);
      res.status(500).send("Fehler beim Senden der E-Mail");
    }
  })();
});

// Server starten
app.listen(5001, () => {
  console.log("🚀 Server läuft auf Port 5001");
});

export default app;
