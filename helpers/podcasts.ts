import { axiosInstance } from "@/lib/utils";
import { Paginated } from "@/types/common";

export type Podcast = {
  id: string;
  featured_image: string;
  title: string;
  description: string;
  audio: string;
  created_at: string;
  duration_in_minutes: number;
  category: {
    id: string;
    name: string;
  } | null;
};
export type Category = {
  id: string;
  name: string;
};
export const getPodcasts = async (
  page: string | null,
  search: string | null,
  categoryId: string | null,
): Promise<Paginated<Podcast[]>> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/podcasts",
    params: { page, search, podcast_category_id: categoryId },
  }).then((res) => res.data.data);
};

export const getPodcast = async (id: string): Promise<Podcast> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/podcasts/${id}`,
  }).then((res) => res.data.data);
};

export const getRelatedPodcasts = async (id: string): Promise<Podcast[]> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/podcasts/${id}/related`,
  }).then((res) => res.data.data);
};

export const getPodcastCategories = async (): Promise<Category[]> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/podcasts/categories",
  }).then((res) => res.data.data);
};
