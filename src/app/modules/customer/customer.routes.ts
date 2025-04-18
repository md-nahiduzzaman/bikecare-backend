import express from "express";
import { customerController } from "./customer.controller";

const route = express.Router();

route.post("/", customerController.createCustomer); // Create customer
route.get("/", customerController.getAllCustomers); // Get all customers
route.get("/:id", customerController.getSingleCustomer); // Get single customer by id

export const customerRouters = route;
