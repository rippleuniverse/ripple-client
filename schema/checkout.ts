import { z } from "zod";

export const ShopCheckoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "First name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(1, "Phone number is required"),
  apartment: z.string().min(1, "Name is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  quantity: z.number().min(1, "Quantity is required"),
  couponCode: z.string().nullable().optional(),
  saveBillingInfo: z.boolean({
    message: "Save billing info is required",
  }),
});

export const TicketSchema = z.object({
  id: z.string().min(1, "Ticket is required"),
  quantity: z.number().min(0, "Quantity is required"),
});

export const EventCheckoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "First name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(1, "Phone number is required"),
  apartment: z.string().min(1, "Name is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  saveBillingInfo: z.boolean({
    message: "Save billing info is required",
  }),
  couponCode: z.string().nullable().optional(),
  tickets: z.array(TicketSchema).min(1, "At least one ticket is required"),
});

export type ShopCheckoutSchemaType = z.infer<typeof ShopCheckoutSchema>;
export type EventCheckoutSchemaType = z.infer<typeof EventCheckoutSchema>;
