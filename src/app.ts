import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routers";

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

app.use("/api/v1", router);

export default app;
