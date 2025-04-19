import express from "express";
import { bikeController } from "./bike.controller";

const route = express.Router();

route.post("/", bikeController.createBike);
route.get("/", bikeController.getAllBikes);
route.get("/:id", bikeController.getSingleBike);

export const bikeRouters = route;
