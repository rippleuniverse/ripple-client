import { z } from "zod";

export const ApplicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "First name is required"),
  email: z.email("Invalid email"),
  phoneDialCode: z
    .string({ message: "Invalid phone code" })
    .min(1, "Phone dial code is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  cv: z.any().refine((val) => val, { message: "CV is required" }),
  personalUrl: z.string().optional().nullable(),
});

export type ApplicationSchemaType = z.infer<typeof ApplicationSchema>;
