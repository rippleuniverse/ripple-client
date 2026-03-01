import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { getUser } from "@/helpers/auth";

export function useAuth() {
  const bearer = Cookies.get("bearer_key");

  const fetcher = () => getUser(bearer);

  const user = useQuery({
    queryFn: fetcher,
    queryKey: ["user"],
    enabled: !!bearer,
    retry: false,
  });

  return { user };
}

export function useAuthenticated() {
  const { user } = useAuth();
  const router = useRouter();
  if (!user.isLoading && !user.data) {
    console.log("Push");
    router.push("/signin");
  }
}
