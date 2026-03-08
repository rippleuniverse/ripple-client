import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { getEvent, getEvents, getOverviewEvents } from "@/helpers/events";

export function useEvents() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const access = searchParams.get("access");
  const type = searchParams.get("type");
  const categoryId = searchParams.get("category_id");
  const fetcher = () => getEvents(page, access, type, categoryId);

  return useQuery({
    queryFn: fetcher,
    queryKey: ["events", page, access, type, categoryId],
  });
}

export function useOverview() {
  return useQuery({
    queryFn: getOverviewEvents,
    queryKey: ["overview-events"],
  });
}

export function useEvent() {
  const { slug } = useParams();
  const fetcher = () => getEvent(slug as string);

  return useQuery({
    queryFn: fetcher,
    queryKey: ["event", slug],
  });
}
