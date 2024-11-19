import express from "express";
import {
  getLikeforMessage,
  likedByUser,
  likeDislikeMessage,
} from "../controllers/messageLikeCtrl.js";

const router = express.Router();

// Like routing
router.get("/getLikes/:id", getLikeforMessage);
router.get("/likedByUser/:userId/:messageId", likedByUser);
router.post("/likeDislike", likeDislikeMessage);

export default router;
