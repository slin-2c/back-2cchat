import express from "express";
import {
  createMessageNote,
  deleteMessageNote,
  getOneMessageNote,
  updateMessageNote,
} from "../controllers/messageNoteCtrl.js";

const router = express.Router();

// Note routing
router.get("/:id", getOneMessageNote);
router.post("/", createMessageNote);
router.put("/:id", updateMessageNote);
router.delete("/:id", deleteMessageNote);

export default router;
