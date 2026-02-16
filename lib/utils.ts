import { QueryClient } from "@tanstack/react-query";
import Axios, { AxiosError } from "axios";
import { type ClassValue, clsx } from "clsx";
import Cookies from "js-cookie";
import { twMerge } from "tailwind-merge";
import { env } from "./env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const queryClient = new QueryClient();

export const errorParser = (error: unknown): string => {
  const DEFAULT_ERROR = "An error occured";
  if (error instanceof AxiosError) {
    const errorData = error.response?.data;
    return "message" in errorData ? errorData.message : DEFAULT_ERROR;
  }
  if (error instanceof Error) {
    return error.message;
  }

  return DEFAULT_ERROR;
};

export const axiosInstance = () => {
  const token = Cookies.get("bearer_key");
  const AppAxios = Axios.create({
    baseURL: env.api.url,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      Accept: "application/json",
    },
    withCredentials: false,
  });

  return {
    AppAxios,
  };
};

export function debounce(
  func: (...args: any[]) => void,
  wait: number,
): (...args: any[]) => void {
  let timeoutId: number | undefined;

  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), wait);
  };
}

export function currencyFormatter(currency: string, amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
}
