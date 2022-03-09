import express from "express";
import { watch, edit, remove, upload } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);

export default videoRouter;
