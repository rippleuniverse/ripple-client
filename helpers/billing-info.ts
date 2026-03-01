import { axiosInstance } from "@/lib/utils";

export type BillingInfo = {
  first_name: string;
  last_name: string;
  apartment: string;
  city: string;
  country: string;
  email: string;
  phone: string;
};

export const getBillingInfo = async (): Promise<BillingInfo | null> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/billing-info",
  }).then((res) => res.data.data);
};
