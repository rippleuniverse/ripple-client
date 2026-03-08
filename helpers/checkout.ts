import { axiosInstance } from "@/lib/utils";
import {
  EventCheckoutSchemaType,
  ProgramCheckoutSchemaType,
  ShopCheckoutSchemaType,
} from "@/schema/checkout";
import { Currency } from "@/types/common";

export const shopCheckout = async (
  data: ShopCheckoutSchemaType & {
    currency: Currency;
    productId: string;
  },
): Promise<string> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    method: "POST",
    url: "/checkout/shop",
    data: {
      currency: data.currency,
      billing_information: {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        apartment: data.apartment,
        city: data.city,
        country: data.country,
      },
      items: [
        {
          product_id: data.productId,
          quantity: data.quantity,
        },
      ],
      save_billing_information: data.saveBillingInfo,
      coupon_code: data.couponCode,
    },
  }).then((res) => res.data.data.payment_url);
};

export const programCheckout = async (
  data: ProgramCheckoutSchemaType & {
    currency: Currency;
    programId: string;
  },
): Promise<string> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    method: "POST",
    url: "/checkout/program",
    data: {
      currency: data.currency,
      coupon_code: data.couponCode,
      program_id: data.programId,
    },
  }).then((res) => res.data.data.payment_url);
};

export const eventCheckout = async (
  data: EventCheckoutSchemaType & {
    currency: Currency;
  },
): Promise<string> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    method: "POST",
    url: "/checkout/event",
    data: {
      currency: data.currency,
      billing_information: {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        apartment: data.apartment,
        city: data.city,
        country: data.country,
      },
      coupon_code: data.couponCode,
      tickets: data.tickets,
      save_billing_information: data.saveBillingInfo,
    },
  }).then((res) => res.data.data.payment_url);
};
