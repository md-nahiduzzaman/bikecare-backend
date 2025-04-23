import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routers";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import dotenv from "dotenv";
import httpStatus from "http-status";

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "bikecare server is running",
  });
});

app.use("/api", router);
app.use(globalErrorHandler);

export default app;
