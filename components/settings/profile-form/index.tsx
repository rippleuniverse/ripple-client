"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { UserProfile } from "@/helpers/auth";
import { useAuth } from "@/hooks/auth";
import { UpdateProfileSchema, UpdateProfileSchemaType } from "@/schema/auth";

export const ProfileForm: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuth();
  return (
    <ProfileFormProvider key={user.data?.email} user={user.data}>
      {children}
    </ProfileFormProvider>
  );
};

type ProfileFormProviderProps = PropsWithChildren<{
  user?: UserProfile;
}>;

export const ProfileFormProvider: FC<ProfileFormProviderProps> = ({
  user,
  children,
}) => {
  const profileForm = useForm<UpdateProfileSchemaType>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: user
      ? {
          avatar: {
            file: null,
            url: user.avatar,
          },
          email: user.email,
          fullName: user.full_name,
        }
      : {},
  });
  return <FormProvider {...profileForm}>{children}</FormProvider>;
};
