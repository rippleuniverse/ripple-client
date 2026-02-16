import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import {
  getAllProductCategories,
  getCategoriesWithProducts,
  getProduct,
  getProducts,
} from "@/helpers/shop";

export function useCategoriesWithProducts() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const fetcher = () => getCategoriesWithProducts(page);

  return useQuery({
    queryFn: fetcher,
    queryKey: ["categories-with-products", page],
  });
}

export function useAllCategories() {
  return useQuery({
    queryFn: getAllProductCategories,
    queryKey: ["all-categories"],
  });
}

export function useProduct() {
  const { slug } = useParams();
  const fetcher = () => getProduct(slug as string);

  return useQuery({ queryFn: fetcher, queryKey: ["product", slug] });
}

export function useProducts() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  const categoryId = searchParams.get("category_id");
  const type = searchParams.get("type");
  const fetcher = () => getProducts(page, search, categoryId, type);

  return useQuery({
    queryFn: fetcher,
    queryKey: ["products", page, search, categoryId, type],
  });
}
