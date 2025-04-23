"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouters = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const route = express_1.default.Router();
route.post("/", customer_controller_1.customerController.createCustomer);
route.get("/", customer_controller_1.customerController.getAllCustomers);
route.get("/:id", customer_controller_1.customerController.getSingleCustomer);
route.put("/:id", customer_controller_1.customerController.updateSingleCustomer);
route.delete("/:id", customer_controller_1.customerController.deleteSingleCustomer);
exports.customerRouters = route;
