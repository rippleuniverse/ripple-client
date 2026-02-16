import { Price } from "@/helpers/shop";
import { Currency } from "@/types/common";
import { useLocalStorage } from "./local-storage";

export function usePrice(prices?: Price[]): Price | undefined {
  const { storedValue, handleSetValue } = useLocalStorage<Currency>(
    "currency",
    "USD",
  );

  return prices?.find((price) => price.currency === storedValue);
}
