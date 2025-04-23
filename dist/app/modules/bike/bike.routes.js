"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRouters = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const route = express_1.default.Router();
route.post("/", bike_controller_1.bikeController.createBike);
route.get("/", bike_controller_1.bikeController.getAllBikes);
route.get("/:id", bike_controller_1.bikeController.getSingleBike);
exports.bikeRouters = route;
