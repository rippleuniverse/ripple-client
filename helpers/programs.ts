import { Price } from "@/helpers/shop";
import { axiosInstance } from "@/lib/utils";
import { Paginated } from "@/types/common";

export type Category = {
  id: string;
  name: string;
};
export type ExperienceLevel = "beginner" | "intermediate" | "expert";

export type Program = {
  id: string;
  name: string;
  author: string;
  skills: string[];
  experience_level: ExperienceLevel;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  price: Price[];
  rating: {
    avg_rating: number;
    count: number;
  };
  featured_image: string;
  created_at: string;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  module_no: string;
};

export type ProgramData = {
  id: string;
  name: string;
  author: string;
  skills: string[];
  description: string;
  modules: Module[];
  category: {
    id: string;
    name: string;
    slug: string;
  };
  rating: {
    avg_rating: number;
    count: number;
  };
  experience_level: ExperienceLevel;
  formatted_price: string;
  price: Price[];
  featured_image: string;
  created_at: string;
};

export type Review = {
  id: string;
  review: string;
  rating: number;
  created_at: string;
  user: {
    full_name: string;
    avatar: string;
  } | null;
};

export const getProgramsCategories = async (): Promise<Category[]> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/programs/categories",
  }).then((res) => res.data.data);
};

export const getPrograms = async (
  page: string | null,
  search: string | null,
  categoryId: string | null,
): Promise<Paginated<Program[]>> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/programs",
    params: { page, search, category_id: categoryId },
  }).then((res) => res.data.data);
};

export const getRelatedPrograms = async (
  slug: string | null,
): Promise<Program[]> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: `/programs/${slug}/related`,
  }).then((res) => res.data.data);
};

export const getProgram = async (id: string | null): Promise<ProgramData> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/programs/${id}`,
  }).then((res) => res.data.data);
};

export const getProgramReviews = async (
  slug: string | null,
): Promise<Paginated<Review[]>> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/programs/${slug}/reviews`,
  }).then((res) => res.data.data);
};
