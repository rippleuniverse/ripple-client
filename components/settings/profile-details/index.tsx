"use client";

import { useMutation } from "@tanstack/react-query";
import { Pen } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "@/components/common/button";
import { removeAvatar } from "@/helpers/auth";
import { useAuth } from "@/hooks/auth";
import { errorParser } from "@/lib/utils";
import { UpdateProfileSchemaType } from "@/schema/auth";

export const ProfileDetails: FC = () => {
  const { user } = useAuth();
  const { setValue, clearErrors, watch } =
    useFormContext<UpdateProfileSchemaType>();
  const { open, getInputProps } = useDropzone({
    // 5mb
    maxSize: 5 * 1024 * 1024,
    maxFiles: 1,
    onDropAccepted(files) {
      setValue("avatar", {
        file: files[0],
        url: null,
      });
      clearErrors("avatar");
    },
    onDropRejected(rejections) {
      const error = rejections[0].errors[0].message;
      toast.error(error);
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: removeAvatar,
    onSuccess() {
      toast.success("Avatar has been removed");
      setValue("avatar", {
        file: null,
        url: null,
      });
      user.refetch();
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });
  const avatar = watch("avatar");
  const avatarImage = avatar?.file
    ? URL.createObjectURL(avatar.file)
    : avatar?.url;

  return (
    <div
      className={"border border-gray-200 rounded-2xl p-8 xl:w-4/12 space-y-5"}
    >
      <input {...getInputProps()} />
      <div
        role={"button"}
        onClick={open}
        className="mx-auto w-max relative cursor-pointer"
      >
        <Image
          src={avatarImage ?? "/images/avatar.jpg"}
          alt={user.data?.full_name ?? ""}
          width={120}
          height={120}
          className={
            "size-30 rounded-full object-cover border-4 border-gray-100"
          }
        />

        <span
          className={
            "text-white bg-secondary-light  absolute bottom-1 border-4 border-white right-0 p-2 rounded-full"
          }
        >
          <Pen className={"size-3"} />
        </span>
      </div>
      <div>
        <h3
          className={
            "font-semibold text-base md:text-lg lg:text-xl text-center"
          }
        >
          {user.data?.full_name}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm text-center capitalize">
          {user.data?.role}
        </p>
      </div>
      <div className="bg-gray-50 rounded-3xl p-3 text-center">
        <p className={"text-gray-400 font-bold text-xs"}>Member Since</p>
        <p className={"font-bold"}>{user.data?.created_at}</p>
      </div>
      <Button
        className={"font-bold w-full border-gray-200"}
        size={"xl"}
        onClick={() => mutate()}
        variant={"outline"}
        disabled={isPending || !user.data?.avatar}
      >
        Remove picture
      </Button>
    </div>
  );
};
