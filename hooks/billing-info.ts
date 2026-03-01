import { useQuery } from "@tanstack/react-query";
import { getBillingInfo } from "@/helpers/billing-info";

export function useBillingInfo() {
  return useQuery({
    queryFn: getBillingInfo,
    queryKey: ["billing-info"],
  });
}
