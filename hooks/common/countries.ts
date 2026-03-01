import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@/helpers/countries";

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
}
