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
  saveBillingInfo: z.boolean({
    message: "Save billing info is required",
  }),
});

export type ShopCheckoutSchemaType = z.infer<typeof ShopCheckoutSchema>;
