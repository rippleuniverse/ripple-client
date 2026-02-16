import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { debounce } from "@/lib/utils";

export function useFilter(field: string) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filter = searchParams.get(field);

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (e: ChangeEvent<HTMLInputElement> | string) => {
    const otherFields = searchParams.toString();
    const filterText = typeof e === "string" ? e : e.target.value;

    otherFields.replaceAll(`${field}=${filterValue}`, "");
    setFilterValue(filterText);
    debounce(() => {
      const otherFields = searchParams
        .toString()
        .replaceAll(`${field}=${filterValue}`, "");
      router.push(
        `?${otherFields}${otherFields ? "&" : ""}${field}=${filterText}`,
        { scroll: false },
      );
    }, 300)();
  };

  return {
    filter,
    filterValue,
    handleFilter,
  };
}
