export type SelectOption = {
  name: string;
  value: string;
};

export type Paginated<T> = {
  data: T;
  meta: {
    total: number;
    currentPage: number;
    perPage: number;
    lastPage: number;
    from: number;
    to: number;
  };
};

export type Currency = "USD" | "NGN";
