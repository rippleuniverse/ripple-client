import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { getPurchasedItem, getPurchasedItems } from "@/helpers/invoice";

export function usePurchasedItems() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const productType = searchParams.get("product_type");
  const fetcher = () => getPurchasedItems(page, productType);

  return useQuery({
    queryFn: fetcher,
    queryKey: ["purchased-items", page, productType],
  });
}

export function usePurchasedItem() {
  const { slug } = useParams();
  const fetcher = () => getPurchasedItem(slug as string);

  return useQuery({
    queryFn: fetcher,
    queryKey: ["purchased-item", slug],
  });
}
