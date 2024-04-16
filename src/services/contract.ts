import { Pagination } from "@/types/pagination";
import { api } from "./api";
import { ContractProps } from "@/types/contract";

export const getContract = async (page: number, perPage?: number): Promise<Pagination<ContractProps> | undefined> => {
  const { data } = await api.GET(`/contract?page=${page}&perPage=${perPage || 10}`, {});
  return data;
};
