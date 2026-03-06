import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import {
  getAllBlogCategories,
  getBlog,
  getBlogs,
  getRelatedBlogs,
} from "@/helpers/blogs";

export function useBlogs() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const fetcher = () => getBlogs(page, search, category);

  return useQuery({
    queryKey: ["blogs", page, search, category],
    queryFn: fetcher,
  });
}

export function useBlogCategories() {
  return useQuery({
    queryKey: ["blog-categories"],
    queryFn: getAllBlogCategories,
  });
}

export function useBlog() {
  const { slug } = useParams();
  const fetcher = () => getBlog(slug as string);

  return useQuery({
    queryKey: ["blog", slug],
    queryFn: fetcher,
    enabled: !!slug,
  });
}

export function useRelatedBlogs() {
  const { slug } = useParams();
  const fetcher = () => getRelatedBlogs(slug as string);

  return useQuery({
    queryKey: ["related-blogs", slug],
    queryFn: fetcher,
  });
}
