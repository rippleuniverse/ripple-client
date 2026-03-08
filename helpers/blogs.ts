import { axiosInstance } from "@/lib/utils";
import { Paginated } from "@/types/common";

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};

export type BlogItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  featured_image: string;
  created_at: string;
  read_time: string;
  category: {
    id: string;
    name: string;
  };
};

export type BlogData = BlogItem & {
  next_blog: string | null;
  prev_blog: string | null;
  content: string;
};

export const getAllBlogCategories = async (): Promise<BlogCategory[]> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/blogs/categories",
  }).then((res) => res.data.data);
};

export const getBlog = async (slug: string): Promise<BlogData> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/blogs/${slug}`,
  }).then((res) => res.data.data);
};

export const getOverviewBlogs = async (): Promise<BlogItem[]> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/blogs/overview",
  }).then((res) => res.data.data);
};

export const getRelatedBlogs = async (slug: string): Promise<BlogItem[]> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/blogs/${slug}/related`,
  }).then((res) => res.data.data);
};

export const getBlogs = async (
  page: string | null,
  search: string | null,
  categoryId: string | null,
): Promise<Paginated<BlogItem[]>> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/blogs",
    params: {
      page,
      search,
      blog_category_id: categoryId,
    },
  }).then((res) => res.data.data);
};
