import express from "express";
import { serviceRecordController } from "./serviceRecord.controller";

const route = express.Router();

route.post("/", serviceRecordController.createService);
route.get("/", serviceRecordController.getAllServices);
route.get("/:id", serviceRecordController.getSingleServices);
route.put("/:id", serviceRecordController.updateSingleCustomer);
route.get("/status", serviceRecordController.checkStatus);

export const serviceRecordRouters = route;
