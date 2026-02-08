"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDrop } from "react-use";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { ErrorText } from "@/components/common/form/error-text";
import { Input } from "@/components/common/form/input";
import { Label } from "@/components/common/form/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/common/form/native-select";
import { COUNTRIES } from "@/constants";
import { submitApplication } from "@/helpers/roles";
import { useRole } from "@/hooks/roles";
import { creatoDisplay } from "@/lib/fonts";
import { errorParser } from "@/lib/utils";
import { ApplicationSchema, ApplicationSchemaType } from "@/schema/roles";

export const Apply: FC = () => {
  return (
    <section className={"py-12 bg-white"}>
      <Container className={"max-w-lg lg:max-w-2xl mx-auto space-y-5"}>
        <h1
          className={`${creatoDisplay.className} font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center`}
        >
          Apply for this role
        </h1>
        <ApplyForm />
      </Container>
    </section>
  );
};

const ApplyForm: FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    clearErrors,
    watch,
    reset,
  } = useForm<ApplicationSchemaType>({
    resolver: zodResolver(ApplicationSchema),
  });
  const role = useRole();
  const { mutate, isPending } = useMutation({
    mutationFn: submitApplication,
    onSuccess() {
      reset();
      toast.success("Application submitted successfully");
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });
  const { open, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/docx": [".doc", "docx"],
    },
    multiple: false,
    onDropAccepted(files) {
      setValue("cv", files[0]);
      clearErrors("cv");
    },
    onDropRejected(errors) {
      toast.error(errors[0].errors[0].message);
    },
  });
  const cv = watch("cv");

  const onSubmit = handleSubmit((data) => {
    if (!role.data?.id) return;

    mutate({ ...data, slug: role.data.id });
  });

  return (
    <form onSubmit={onSubmit} className={"space-y-4"}>
      <div className="space-y-1">
        <Input
          placeholder={"First name"}
          className={"w-full border-gray-300 h-12"}
          {...register("firstName")}
        />
        {errors.firstName?.message && (
          <ErrorText>{errors.firstName.message}</ErrorText>
        )}
      </div>

      <div className="space-y-1">
        <Input
          placeholder={"Last name"}
          className={"w-full border-gray-300 h-12"}
          {...register("lastName")}
        />
        {errors.lastName?.message && (
          <ErrorText>{errors.lastName.message}</ErrorText>
        )}
      </div>
      <div className="space-y-1">
        <Input
          placeholder={"Email"}
          type={"email"}
          className={"w-full border-gray-300 h-12"}
          {...register("email")}
        />
        {errors.email?.message && <ErrorText>{errors.email.message}</ErrorText>}
      </div>
      <div className="space-y-1">
        <div className="flex gap-2">
          <div className="w-3/12">
            <NativeSelect
              className={
                "[&>select]:h-12 [&>select]:border-gray-300 border-gray-300"
              }
              {...register("phoneDialCode")}
            >
              {COUNTRIES.map((item, index) => (
                <NativeSelectOption key={index} value={item.dial_code}>
                  ({item.dial_code}) {item.name}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </div>
          <Input
            placeholder={"Phone Number"}
            className={"w-full border-gray-300 h-12"}
            {...register("phoneNumber")}
          />
        </div>
        {errors.phoneNumber?.message && (
          <ErrorText>{errors.phoneNumber.message}</ErrorText>
        )}
        {errors.phoneDialCode?.message && (
          <ErrorText>{errors.phoneDialCode.message}</ErrorText>
        )}
      </div>

      <div className={"space-y-2"}>
        <Label>Resume/CV</Label>
        <button
          className={
            "w-full py-12 border-dashed border-2 rounded-2xl border-gray-300 flex flex-col items-center"
          }
          type={"button"}
          onClick={open}
        >
          <input {...getInputProps()} />
          {cv ? (
            <span className={"text-purple-700 text-xs md:text-sm lg:text-base"}>
              {cv.name}
            </span>
          ) : (
            <>
              <span
                className={"text-purple-700 text-xs md:text-sm lg:text-base"}
              >
                Attach, Dropbox or enter manually
              </span>
              <span className={"text-gray-400 text-xs md:text-sm lg:text-base"}>
                (File types: pdf, doc, docx)
              </span>
            </>
          )}
        </button>
        {typeof errors.cv?.message === "string" && (
          <ErrorText>{errors.cv.message}</ErrorText>
        )}
      </div>
      <div className="space-y-1">
        <Input
          placeholder={"Personal website link (optional)"}
          className={"w-full border-gray-300 h-12"}
          {...register("personalUrl")}
        />
        {errors.personalUrl?.message && (
          <ErrorText>{errors.personalUrl.message}</ErrorText>
        )}
      </div>
      <div className={"flex justify-center"}>
        <Button disabled={isPending}>Apply for Job</Button>
      </div>
    </form>
  );
};
