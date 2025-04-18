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
  return result;
};

// update single customer by id
const updateSingleCustomer = async (id: string) => {
  console.log("updateSingleCustomer", id);
};

// delete single customer by id
const deleteSingleCustomer = async (id: string) => {
  console.log("deleteSingleCustomer", id);
};

export const customerService = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
};
