import dotenv from "dotenv";
dotenv.config();

import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

import whitelistRoutes from "./routes/whitelistRoutes.js";

const app = express();

// Security Headers
app.use(helmet());

// CORS
app.use(
  cors({
    origin: "https://kappyies-website.vercel.app/",
    methods: ["GET", "POST"],
  })
);

// Rate Limiter
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 300,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(limiter);

// Parse JSON
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 KAPPYIES NFT API Running...");
});

// Routes
app.use("/api/whitelist", whitelistRoutes);

export default app;
