import express from "express";
import cors, { CorsOptions } from "cors";

export function configureCORS(app: express.Express) {
  if (!process.env.CORS_ORIGIN) {
    throw new Error("CORS_ORIGIN environment variable is not set");
  } else {
    const corsOptions: CorsOptions = {
      origin: process.env.CORS_ORIGIN,
      methods: "GET,PUT,POST,DELETE",
      allowedHeaders: ["Content-Type", "Authorization"],
      optionsSuccessStatus: 200,
      credentials: true,
    };
    app.use(cors(corsOptions));
    app.options('*', cors());
  }
}
