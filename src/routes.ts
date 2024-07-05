import express from "express";
import ActivityController from "./controllers/ActivityController";

const routes = express.Router()
const activityController = new ActivityController();

routes.post("/activity", activityController.create)

export default routes;
