export type TService = {
  bikeId: string;
  serviceDate: string;
  description: string;
  status?: "pending" | "in_progress" | "done";
};
