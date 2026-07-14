import express from "express";
import { joinWhitelist } from "../controllers/whitelistController.js";

const router = express.Router();

// POST /api/whitelist
router.post("/", joinWhitelist);

export default router;