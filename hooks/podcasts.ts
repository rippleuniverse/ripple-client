import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import {
  getPodcast,
  getPodcastCategories,
  getPodcasts,
  getRelatedPodcasts,
} from "@/helpers/podcasts";

export function usePodcasts() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  const categoryId = searchParams.get("podcast_category");
  const fetcher = () => getPodcasts(page, search, categoryId);

  return useQuery({
    queryKey: ["podcasts", page, search, categoryId],
    queryFn: fetcher,
  });
}

export function useRelatedPodcasts() {
  const { slug } = useParams();
  const fetcher = () => getRelatedPodcasts(slug as string);

  return useQuery({
    queryKey: ["related-podcasts", slug],
    queryFn: fetcher,
  });
}

export function usePodcast() {
  const { slug } = useParams();
  const fetcher = () => getPodcast(slug as string);

  return useQuery({
    queryKey: ["podcast", slug],
    queryFn: fetcher,
    enabled: !!slug,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["podcast-categories"],
    queryFn: getPodcastCategories,
  });
}
