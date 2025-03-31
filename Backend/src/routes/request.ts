import { Router } from "express";
import { RequestService } from "../service/RequestService";
import { Request, Response } from "express";
const requestRouter = Router();

// Neue Anfrage speichern
requestRouter.post("/", async (req, res) => {
  try {
    const request = await RequestService.createRequest(req.body);
    res.status(201).json(request);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Alle Anfragen abrufen
requestRouter.get("/", async (req, res) => {
  try {
    const requests = await RequestService.getAllRequests();
    res.status(200).json(requests);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Einzelne Anfrage abrufen
requestRouter.get("/:id", async (req, res) => {
  try {
    const request = await RequestService.getRequestById(parseInt(req.params.id));
    if (request) {
      res.status(200).json(request);
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Anfrage aktualisieren
requestRouter.put("/:id", async (req, res) => {
  try {
    const updatedRequest = await RequestService.updateRequest(parseInt(req.params.id), req.body);
    if (updatedRequest) {
      res.status(200).json(updatedRequest);
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// Anfrage löschen
requestRouter.delete("/:id", async (req, res) => {
  try {
    const deletedRequest = await RequestService.deleteRequest(parseInt(req.params.id));
    if (deletedRequest) {
      res.status(200).json({ message: "Request deleted successfully" });
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default requestRouter;
