import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import db from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/userRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import messageLikeRoutes from "./routes/messageLikeRoutes.js";
import messageNoteRoutes from "./routes/messageNoteRoutes.js";
import discussionRoutes from "./routes/discussionRoutes.js";
import association from "./models/index.js";
import getUserId from "./middlewares/getUserId.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";

dotenv.config();
// connect to database
db.sync()
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));

association();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// cors policy for security
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    methods: "GET, PUT, POST, DELETE",
    preflightContinue: false,
  })
);

// Dossier Images
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use("/images", express.static(path.join(__dirname, "images")));

// Routes
app.get("/jwtuid", getUserId, (req, res) => {
  res.status(200).json(res.locals.userId);
});

app.use("/user", userRoutes);
app.use("/message", messageRoutes);
app.use("/", messageLikeRoutes);
app.use("/note", messageNoteRoutes);
app.use("/discussion", discussionRoutes);

// Start server on chosen name & port
app.listen(process.env.APP_PORT, () => {
  console.log(
    `App listening at http://${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`
  );
});
