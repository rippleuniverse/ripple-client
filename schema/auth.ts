import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  fullName: z.string().min(1, "Full name is required"),
  ageConfirmation: z
    .boolean({
      message: "Age confirmation is required",
    })
    .refine((val) => val, { message: "Age confirmation is required" }),
  emailSubscription: z.boolean(),
});

export const UpdateProfileSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.email("Invalid email address"),
  avatar: z.any(),
});
export const SignInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export const VerifyEmailSchema = z.object({
  otp: z
    .string({
      message: "Invalid OTP",
    })
    .min(4, "Minimum of 4 digist")
    .max(4, "Maximum of 4 digits"),
});

export const UnlockSiteSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type SignInSchemaType = z.infer<typeof SignInSchema>;
export type VerifyEmailSchemaType = z.infer<typeof VerifyEmailSchema>;
export type UnlockSiteSchemaType = z.infer<typeof UnlockSiteSchema>;
export type UpdateProfileSchemaType = z.infer<typeof UpdateProfileSchema>;
