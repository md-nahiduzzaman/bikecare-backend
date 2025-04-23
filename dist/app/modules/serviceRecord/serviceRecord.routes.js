"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordRouters = void 0;
const express_1 = __importDefault(require("express"));
const serviceRecord_controller_1 = require("./serviceRecord.controller");
const route = express_1.default.Router();
route.post("/", serviceRecord_controller_1.serviceRecordController.createService);
route.get("/", serviceRecord_controller_1.serviceRecordController.getAllServices);
route.get("/:id", serviceRecord_controller_1.serviceRecordController.getSingleServices);
route.put("/:id", serviceRecord_controller_1.serviceRecordController.updateSingleCustomer);
route.get("/status", serviceRecord_controller_1.serviceRecordController.checkStatus);
exports.serviceRecordRouters = route;
