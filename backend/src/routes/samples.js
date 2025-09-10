import express from "express";
import Sample from "../models/Sample.js";

const router = express.Router();

// Create new sample
router.post("/", async (req, res) => {
  try {
    const sample = new Sample({
      location: { coordinates: [req.body.lon, req.body.lat] },
      pH: req.body.pH,
      turbidity: req.body.turbidity,
      tds: req.body.tds,
      nitrate: req.body.nitrate,
      fluoride: req.body.fluoride,
      arsenic: req.body.arsenic,
      ecoli: req.body.ecoli
    });
    await sample.save();
    res.status(201).json(sample);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch latest samples
router.get("/", async (req, res) => {
  try {
    const samples = await Sample.find().sort({ timestamp: -1 }).limit(100);
    res.json(samples);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
