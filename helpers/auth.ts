import Cookies from "js-cookie";
import { Cookie } from "next/font/google";
import { axiosInstance } from "@/lib/utils";
import {
  SignInSchemaType,
  SignUpSchemaType,
  UnlockSiteSchemaType,
  VerifyEmailSchemaType,
} from "@/schema/auth";

export type UserRole = "admin" | "user";

export type UserData = {
  token: string;
  user: UserProfile;
};

export type UserProfile = {
  full_name: string;
  email: string;
  role: UserRole;
  avatar: string | null;
  email_verified_at: string | null;
  created_at: string;
};

export const signUp = async (data: SignUpSchemaType) => {
  const { AppAxios } = axiosInstance();

  const token = await AppAxios({
    url: "/auth/sign-up",
    method: "POST",
    data: {
      full_name: data.fullName,
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword,
      can_subscribe_newsletter: data.emailSubscription,
    },
  }).then((res) => res.data.data.token as string);

  Cookies.set("bearer_key", token, {
    expires: 1,
  });
};

export const signIn = async (data: SignInSchemaType): Promise<UserProfile> => {
  const { AppAxios } = axiosInstance();
  const userData: UserData = await AppAxios({
    url: "/auth/sign-in",
    method: "POST",
    data,
  }).then((res) => res.data.data);

  Cookies.set("bearer_key", userData.token, {
    expires: 1,
  });

  return userData.user;
};

export const getUser = async (bearerKey?: string): Promise<UserProfile> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/auth/user",
    ...(bearerKey
      ? {
          headers: {
            Authorization: `Bearer ${bearerKey}`,
          },
        }
      : {}),
  }).then((res) => res.data.data);
};

export const logout = async () => {
  const { AppAxios } = axiosInstance();
  await AppAxios({
    url: "/auth/logout",
    method: "POST",
  });
  Cookies.remove("bearer_key");
};

export const verifyEmail = async (data: VerifyEmailSchemaType) => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/auth/verify-email",
    method: "POST",
    data,
  }).then((res) => res.data);
};

export const resendEmailVerification = async () => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/auth/resend-email-verification",
    method: "POST",
  }).then((res) => res.data);
};

export const checkSiteUnlocked = async (token?: string): Promise<boolean> => {
  if (!token) return false;

  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/settings/check-site-lock-status",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(() => true)
    .catch(() => false);
};

export const unlockSite = async (data: UnlockSiteSchemaType) => {
  const { AppAxios } = axiosInstance();
  const res = await AppAxios({
    url: "/settings/site-login",
    method: "POST",
    data: { site_unlock_password: data.password },
  }).then((res) => res.data.data.token as string);
  Cookies.set("site_unlocked_token", res, { expires: 1 });
};
