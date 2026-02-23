import { FC } from "react";
import { Pagination } from "@/components/common/pagination";

export const ItemsPagination: FC = () => {
  return (
    <Pagination
      total={0}
      currentPage={0}
      perPage={0}
      lastPage={0}
      from={0}
      to={0}
    />
  );
};
