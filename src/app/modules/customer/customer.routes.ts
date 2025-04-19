import express from "express";
import { customerController } from "./customer.controller";

const route = express.Router();

route.post("/", customerController.createCustomer);
route.get("/", customerController.getAllCustomers);
route.get("/:id", customerController.getSingleCustomer);
route.put("/:id", customerController.updateSingleCustomer);
route.delete("/:id", customerController.deleteSingleCustomer);

export const customerRouters = route;
