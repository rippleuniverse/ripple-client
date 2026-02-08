import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "@/lib/utils";

export function useQueryParams(name: string) {
  const searchParams = useSearchParams();
  const value = searchParams.get(name);
  const router = useRouter();

  const handleSetQueryParam = (val: string) => {
    const oldValue = searchParams.get(name);
    debounce(() => {
      const otherFields = searchParams
        .toString()
        .replaceAll(`${name}=${oldValue}`, "");

      router.push(`?${name}=${val}&${otherFields}`, { scroll: false });
    }, 300)();
  };

  return { value, handleSetQueryParam };
}
