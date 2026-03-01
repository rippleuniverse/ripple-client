import { axiosInstance } from "@/lib/utils";
import { Paginated } from "@/types/common";

export type Price = {
  currency: "USD" | "NGN";
  amount: number | string;
};

export type CategoryWithProduct = {
  id: string;
  name: string;
  description: string;
  slug: string;
  products: Product[];
};
export type Product = {
  id: string;
  featured_image: string;
  type: "physical" | "digital";
  title: string;
  description: string;
  about: string;
  price: Price[];
  benefits: string[];
  target_users: string[];
  how_to_use: string | null;
  access_delivery: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  };
};

export type Category = {
  id: string;
  name: string;
  description: string;
  slug: string;
};

export const getCategoriesWithProducts = async (
  page: string | null,
): Promise<Paginated<CategoryWithProduct[]>> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/products/overview",
    params: { page },
  }).then((res) => res.data.data);
};

export const getProduct = async (id: string): Promise<Product> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/products/${id}`,
  }).then((res) => res.data.data);
};

export const getProducts = async (
  page: string | null,
  search: string | null,
  categoryId: string | null,
  type: string | null,
): Promise<Paginated<Product[]>> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/products",
    params: { page, search, category_id: categoryId, type },
  }).then((res) => res.data.data);
};

export const getAllProductCategories = async (): Promise<Category[]> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/products/categories/all",
  }).then((res) => res.data.data);
};
