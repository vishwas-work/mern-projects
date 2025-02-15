import express from "express";
import taskController from "../controllers/taskController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", protect, taskController.getTask);

export default router;
