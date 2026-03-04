import { useQuery } from "@tanstack/react-query";
import { getUserCoupon } from "@/helpers/coupon";

export function useUserCoupon() {
  return useQuery({
    queryFn: getUserCoupon,
    queryKey: ["user-coupon"],
  });
}
