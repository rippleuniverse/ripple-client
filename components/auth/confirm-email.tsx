"use client";

import { clearInterval, setInterval } from "node:timers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/common/button";
import { Divider } from "@/components/common/divider";
import { ErrorText } from "@/components/common/form/error-text";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/common/form/input-otp";
import { resendEmailVerification, verifyEmail } from "@/helpers/auth";
import { useAuth } from "@/hooks/auth";
import { errorParser } from "@/lib/utils";
import { VerifyEmailSchema, VerifyEmailSchemaType } from "@/schema/auth";

export const ConfirmEmail: FC = () => {
  const { user } = useAuth();
  const {
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailSchemaType>({
    resolver: zodResolver(VerifyEmailSchema),
  });
  const [countdown, setCountdown] = useState(30);
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: verifyEmail,
    async onSuccess() {
      toast.success("Email verified successfully. You will be redirected soon");
      await user.refetch();
      router.push("/dashboard");
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });
  const resendMutation = useMutation({
    mutationFn: resendEmailVerification,
    onSuccess() {
      setCountdown(30);
      toast.success("Email verification has been sent");
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  useEffect(() => {
    if (countdown === 0) return;

    const interval = setInterval(() => {
      setCountdown((val) => val - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (errors.otp?.message) {
      toast.error(errors.otp.message);
      return;
    }

    handleSubmit((data) => {
      mutate(data);
    })();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className={"text-center space-y-2"}>
        <h2 className={"text-lg md:text-xl lg:text-2xl font-semibold"}>
          Confirm your email
        </h2>
        <p>
          We sent an OTP to{" "}
          <span className={"text-[#DE03B5] text-xs md:text-sm font-medium"}>
            {user.data?.email}
          </span>
        </p>
      </div>
      <div className={"space-y-4"}>
        <InputOTP
          onComplete={(value) => {
            setValue("otp", value);
            clearErrors("otp");
          }}
          maxLength={4}
          minLength={4}
        >
          <InputOTPGroup className={"flex justify-center w-full"}>
            <InputOTPSlot className={"border-[#D5D7DA] rounded-lg"} index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        {errors.otp?.message && <ErrorText>{errors.otp.message}</ErrorText>}
        <Button
          disabled={isPending}
          size={"lg"}
          className={"block mx-auto w-10/12 rounded-lg"}
        >
          Confirm email
        </Button>
      </div>
      <Divider className={"bg-[#E9EAEB]"} />
      <p className="text-xs md:text-sm text-center">
        Didn’t get code?{" "}
        {countdown === 0 ? (
          <button
            type={"button"}
            disabled={resendMutation.isPending}
            onClick={() => resendMutation.mutate()}
            className={"text-[#DE03B5] disabled:opacity-50"}
          >
            Resend
          </button>
        ) : (
          <span className={"text-[#DE03B5]"}>
            Resend in {countdown} seconds
          </span>
        )}
      </p>
    </form>
  );
};
