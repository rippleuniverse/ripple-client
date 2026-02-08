"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { cn, debounce } from "@/lib/utils";

export type PaginationProps = {
  total: number;
  currentPage: number;
  perPage: number;
  lastPage: number;
  from: number;
  to: number;
};

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  from,
  lastPage,
  to,
  total,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPage = searchParams.get("page") || "1";
  const noPrevPage = currentPage === 1;
  const noNextPage = currentPage === lastPage;

  const handlePreviousPage = () => {
    if (noPrevPage) return;
    const page = searchParams.get("page");

    debounce(() => {
      const otherFields = searchParams
        .toString()
        .replaceAll(`page=${page}`, "");

      router.push(`?page=${currentPage - 1}&${otherFields}`, { scroll: false });
    }, 300)();
  };

  const handleNextPage = () => {
    if (noNextPage) return;
    const page = searchParams.get("page");

    debounce(() => {
      const otherFields = searchParams
        .toString()
        .replaceAll(`page=${page}`, "");

      router.push(`?page=${currentPage + 1}&${otherFields}`, { scroll: false });
    }, 300)();
  };

  const handleToPage = (page: number) => {
    const current_page = searchParams.get("page");

    debounce(() => {
      const otherFields = searchParams
        .toString()
        .replaceAll(`page=${current_page}`, "");

      router.push(`?page=${page}&${otherFields}`, { scroll: false });
    }, 300)();
  };

  const pages = Array.from({ length: lastPage }, (_, i) => i + currentPage)
    .splice(0, 5)
    .filter((page) => page <= lastPage);

  return (
    <div className={"flex items-center justify-between"}>
      <p className={"text-[#616161] text-xs md:text-sm"}>
        {from} - {to} of {total} pages
      </p>
      <div className="flex items-center space-x-3">
        <button onClick={handlePreviousPage} disabled={noPrevPage}>
          <ChevronLeft className={"stroke-1"} />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={cn(
              "text-black cursor-pointer font-bold text-sm px-2 pb-1 hidden md:inline border-b-[0.1rem]",
              selectedPage === page.toString()
                ? "border-[#F36F2E]"
                : "border-transparent",
            )}
            onClick={() => handleToPage(page)}
          >
            {page}
          </button>
        ))}

        <span
          className={
            "font-bold text-sm px-2 pb-1 hidden md:inline text-gray-500"
          }
        >
          ...
        </span>
        <button onClick={handleNextPage} disabled={noNextPage}>
          <ChevronRight className={"stroke-1"} />
        </button>
      </div>
    </div>
  );
};
