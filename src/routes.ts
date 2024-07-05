import express from "express";
import ActivityController from "./controllers/ActivityController";

const routes = express.Router()
const activityController = new ActivityController();

routes.post("/activity", activityController.create)
routes.get("/activity", activityController.readAll)
routes.get("/activity/:id", activityController.read)
routes.put("/activity/:id", activityController.update)
routes.delete("/activity/:id", activityController.delete)

export default routes;
