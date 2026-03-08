"use client";

import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "@/components/common/button";
import { ErrorText } from "@/components/common/form/error-text";
import { Input } from "@/components/common/form/input";
import { Label } from "@/components/common/form/label";
import { Textarea } from "@/components/common/form/textarea";
import { UserProfile, updateProfile } from "@/helpers/auth";
import { useAuth } from "@/hooks/auth";
import { errorParser } from "@/lib/utils";
import { UpdateProfileSchemaType } from "@/schema/auth";

export const PersonalInformationForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext<UpdateProfileSchemaType>();
  const { user } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationFn: updateProfile,
    onSuccess() {
      toast.success("Profile updated successfully");
      user.refetch();
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <form onSubmit={onSubmit} className={"space-y-7"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className={"space-y-2"}>
          <Label className={"font-bold text-gray-400 uppercase text-xs"}>
            Full Name
          </Label>
          <Input
            {...register("fullName")}
            className={"border-gray-200 rounded-full py-5 w-full"}
          />
          {errors.fullName?.message && (
            <ErrorText>{errors.fullName.message}</ErrorText>
          )}
        </div>

        <div className={"space-y-2"}>
          <Label className={"font-bold text-gray-400 uppercase text-xs"}>
            Email address
          </Label>
          <Input
            {...register("email")}
            type={"email"}
            className={"border-gray-200 rounded-full py-5 w-full"}
          />
          {errors.email?.message && (
            <ErrorText>{errors.email.message}</ErrorText>
          )}
        </div>
      </div>
      <div className="flex justify-end space-x-2 xl:space-x-4">
        <Button
          asChild
          size={"xl"}
          className={"font-bold border-gray-200"}
          variant={"outline"}
        >
          <Link href={"/dashboard/settings"}>Cancel</Link>
        </Button>
        <Button
          disabled={isPending}
          size={"xl"}
          className={"font-bold border-gray-200 bg-secondary-light"}
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
};
