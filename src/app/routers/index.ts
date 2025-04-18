import express from "express";
import { customerRouters } from "../modules/customer/customer.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRouters,
  },
  // {
  //   path: "/bikes",
  //   route: bikeRouters,
  // },
  // {
  //   path: "/services",
  //   route: serviceRouters,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
