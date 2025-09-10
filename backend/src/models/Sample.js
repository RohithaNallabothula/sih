import mongoose from "mongoose";

const SampleSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true } // [lon, lat]
  },
  pH: Number,
  turbidity: Number,
  tds: Number,
  nitrate: Number,
  fluoride: Number,
  arsenic: Number,
  ecoli: Number
});

SampleSchema.index({ location: "2dsphere" });

export default mongoose.model("Sample", SampleSchema);
