import { TCustomError } from "../../middlewares/globalErrorHandler";
import prisma from "../../utils/prisma";
import { TCustomer } from "./customer.interface";

// create customer
const createCustomer = async (payload: TCustomer) => {
  const result = await prisma.customer.create({ data: payload });
  return result;
};

// get all customers
const getAllCustomers = async () => {
  const result = await prisma.customer.findMany({});
  return result;
};

// get single customer by id
const getSingleCustomer = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: { customerId: id },
  });
  if (!result) {
    const error = new Error("Customer not found") as TCustomError;
    error.name = "NotFoundError";
    error.status = 404;
    throw error;
  }
  return result;
};

// update single customer by id
const updateSingleCustomer = async (id: string, payload: any) => {
  const result = await prisma.customer.update({
    where: { customerId: id },
    data: payload,
  });
  return result;
};

// delete single customer by id
const deleteSingleCustomer = async (id: string) => {
  const result = await prisma.customer.delete({
    where: { customerId: id },
  });
  return result;
};

export const customerService = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
};
