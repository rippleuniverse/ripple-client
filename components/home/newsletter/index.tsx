"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "@/components/common/button";
import { ErrorText } from "@/components/common/form/error-text";
import { Input } from "@/components/common/form/input";
import { subscribeToNewsletter } from "@/helpers/newsletter";
import { madeSoulmaze } from "@/lib/fonts";
import { errorParser } from "@/lib/utils";
import { NewsletterSchema, NewsletterSchemaType } from "@/schema/newsletter";

export const Newsletter: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<NewsletterSchemaType>({
    resolver: zodResolver(NewsletterSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: subscribeToNewsletter,
    onSuccess() {
      toast.success("Subscribed to our mailing list successfully");
      reset();
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <div className={"my-3  py-8 relative"}>
      <Image
        src={"/images/home/newsletter.png"}
        alt={"Hero 2"}
        width={185}
        height={195}
        className={
          "w-32 md:w-56 absolute left-20 md:left-44 lg:left-72 xl:left-80 top-0"
        }
      />
      <div className={"max-w-xl mx-auto text-center space-y-6"}>
        <h2
          className={`${madeSoulmaze.className} text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase`}
        >
          join our <br /> <span className="text-secondary">newsletter</span>
        </h2>
        <p className={"text-[#535862] font-medium"}>
          Get insider access to new programs, exclusive events, creator
          opportunities, and insights from Africa&apos;s No 1 Creative Tech lab,
          delivered straight to your inbox.
        </p>
        <form onSubmit={onSubmit} className={"space-y-2 mx-auto md:w-8/12"}>
          <div className={"flex relative"}>
            <Input
              className={"w-full h-11 rounded-full border-gray-300"}
              placeholder={"Enter your email"}
              type={"email"}
              {...register("email")}
            />
            <Button
              disabled={isPending}
              className={"absolute right-0 h-11"}
              size={"lg"}
            >
              Join
            </Button>
          </div>
          {errors.email?.message && (
            <ErrorText>{errors.email.message}</ErrorText>
          )}
        </form>
      </div>
    </div>
  );
};
