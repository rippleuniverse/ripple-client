import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import {
  getHomeOverviewRoles,
  getOpenRoles,
  getOverviewRoles,
  getRole,
} from "@/helpers/roles";

export function useOpenRoles() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  const type = searchParams.get("type");
  const styles = searchParams.get("styles");
  const experienceLevel = searchParams.get("experience_level");

  const fetcher = () =>
    getOpenRoles(page, search, experienceLevel, type, styles);

  return useQuery({
    queryFn: fetcher,
    queryKey: ["open-roles", page, search, experienceLevel, type, styles],
  });
}

export function useRole() {
  const { slug } = useParams();
  const fetcher = () => getRole(slug as string);

  return useQuery({
    queryFn: fetcher,
    queryKey: ["role", slug],
  });
}

export function useRolesOverview() {
  return useQuery({
    queryFn: getOverviewRoles,
    queryKey: ["roles-overview"],
  });
}

export function useHomeRolesOverview() {
  return useQuery({
    queryFn: getHomeOverviewRoles,
    queryKey: ["home-roles-overview"],
  });
}
