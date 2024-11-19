import express from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessages,
  getOneMessage,
} from "../controllers/messageCtrl.js";

const router = express.Router();

// CRUD Message
router.get("/", getAllMessages);
router.get("/:id", getOneMessage);
router.post("/", createMessage);
router.delete("/:id", deleteMessage);

export default router;
