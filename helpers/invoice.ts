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

export const downloadProgramFile = async (id: string) => {
  const { AppAxios } = axiosInstance();
  const data = await AppAxios({
    url: `invoice/purchases/${id}/download-program`,
    method: "GET",
    responseType: "blob",
  }).then((res) => res.data);
  const url = URL.createObjectURL(data);
  const a = document.createElement("a");
  a.href = url;
  const date = Date.now();
  const contentDisposition = await AppAxios({
    url: `invoice/purchases/${id}/download-program`,
    method: "GET",
    responseType: "blob",
  }).then((res) => res.headers["content-disposition"]);

  let filename = `program-${date}`;
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(
      /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/,
    );
    if (filenameMatch && filenameMatch[1]) {
      filename = filenameMatch[1].replace(/['"]/g, "");
    }
  } else {
    // Fallback: try to determine extension from blob type
    const extension = data.type.split("/")[1] || "pdf";
    filename = `${filename}.${extension}`;
  }
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(
      /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/,
    );
    if (filenameMatch && filenameMatch[1]) {
      filename = filenameMatch[1].replace(/['"]/g, "");
    }
  }
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

export const getPurchasedItem = async (id: string): Promise<PurchaseItem> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/invoice/purchases/${id}`,
  }).then((res) => res.data.data);
};
