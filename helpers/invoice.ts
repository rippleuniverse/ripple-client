import { axiosInstance } from "@/lib/utils";
import { Paginated } from "@/types/common";

export type InvoiceStatus =
  | "paid"
  | "pending"
  | "cancelled"
  | "delivered"
  | "in_transit";
export type ProductType = "program" | "event" | "shop";
export const statusVariants: Record<
  InvoiceStatus,
  "success" | "destructive" | "outline" | "warning"
> = {
  cancelled: "destructive",
  paid: "success",
  pending: "warning",
  in_transit: "outline",
  delivered: "success",
};

export type PurchaseItem = {
  id: string;
  quantity: number;
  unit_price: string;
  product_id: string;
  invoice: {
    id: string;
    status: InvoiceStatus;
    created_at: string;
    trx_id: string;
    payment_method: string;
    payment_url: string | null;
  };
  product_type: ProductType;
  item: {
    featured_image: string;
    name: string;
  };
  total: string;
};

export const getPurchasedItems = async (
  page: string | null,
  productType: string | null,
): Promise<Paginated<PurchaseItem[]>> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/invoice/purchases",
    params: {
      page,
      product_type: productType,
    },
  }).then((res) => res.data.data);
};

export const getPurchasedItem = async (id: string): Promise<PurchaseItem> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/invoice/purchases/${id}`,
  }).then((res) => res.data.data);
};
