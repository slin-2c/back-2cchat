import express from "express";
import {
  createDiscussion,
  deleteDiscussion,
  getAllDiscussions,
  getOneDiscussion,
} from "../controllers/discussionCtrl.js";

const router = express.Router();

// CRUD Discussion
router.get("/:id", getAllDiscussions);
router.get("/:id", getOneDiscussion);
router.post("/", createDiscussion);
router.delete("/:id", deleteDiscussion);

export default router;
