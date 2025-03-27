import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import { Request } from "./model/RequestModel"; // Falls du DB-Daten benötigst

// Transporter erstellen
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Deine Gmail-Adresse
    pass: process.env.EMAIL_PASS, // Dein App-Passwort
  },
});

console.log("EMAIL_USER:", process.env.EMAIL_USER);
if (!process.env.EMAIL_PASS) {
  console.error("EMAIL_PASS ist nicht gesetzt!");
}

transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter-Fehler:", error);
  } else {
    console.log("Transporter ist bereit, E-Mails zu versenden.");
  }
});

/**
 * Sendet eine E-Mail mit (optional) Anhang.
 * @param recipientEmail - Die Empfängeradresse
 * @param currentMessage - Die Nachricht, die gesendet werden soll
 * @returns Informationen zum E-Mail-Versand
 */
export async function sendMailWithAttachment(recipientEmail: string, currentMessage: string) {
  console.log("sendMailWithAttachment wird ausgeführt...");
  try {
    const filePath = path.join(__dirname, "export.json");
    console.log("Pfad zur Datei:", filePath);

    // Falls die Datei nicht existiert, erstelle sie mit einem leeren Array
    if (!fs.existsSync(filePath)) {
      console.log("Die Datei existiert nicht. Erstelle export.json...");
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
      console.log("Datei wurde erstellt.");
    }

    // Erstelle den Text der E-Mail
    const mailText = "Ihre Nachricht:\n\n" + currentMessage;

    // Erstelle die Optionen für die E-Mail
    const mailOptions = {
      from: `"Mein About Me" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // E-Mail wird an dich gesendet
      subject: "Neue Anfrage von " + recipientEmail,
      text: mailText,
      replyTo: recipientEmail,
      // Falls du den export.json-Anhang mitschicken möchtest:
      // attachments: [{
      //   filename: 'export.json',
      //   path: filePath,
      // }],
    };

    console.log("Sende E-Mail an:", recipientEmail);
    const info = await transporter.sendMail(mailOptions);
    console.log("E-Mail wurde versendet:", info.response);
    return info;
  } catch (error) {
    console.error("Fehler im E-Mail-Versand:", error);
    throw error;
  }
}
