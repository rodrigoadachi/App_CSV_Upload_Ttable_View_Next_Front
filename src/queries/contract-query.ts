import { getContract } from "@/services/contract";
import { ContractProps } from "@/types/contract";
import { Pagination } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";

export const useContract = (page: number): Pagination<ContractProps> =>
  useQuery({
    queryFn: () => getContract(page),
    queryKey: ['contract', page],
    refetchOnWindowFocus: false,
  });
