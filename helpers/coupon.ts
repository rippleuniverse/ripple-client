import { Price } from "@/helpers/shop";
import { axiosInstance } from "@/lib/utils";

export type Coupon = {
  id: string;
  code: string;
  is_active: boolean;
  type: "percentage" | "fixed";
  percentage_value: number;
  fixed_value: Price[] | null;
};

export const getUserCoupon = async (): Promise<Coupon | null> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/coupons/user",
  }).then((res) => res.data.data);
};
