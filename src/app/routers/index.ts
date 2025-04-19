import express from "express";
import { customerRouters } from "../modules/customer/customer.routes";
import { bikeRouters } from "../modules/bike/bike.routes";
import { serviceRecordRouters } from "../modules/serviceRecord/serviceRecord.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRouters,
  },
  {
    path: "/bikes",
    route: bikeRouters,
  },
  {
    path: "/services",
    route: serviceRecordRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
