"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/common/button";
import { Divider } from "@/components/common/divider";
import { FormField } from "@/components/common/form/form-field";
import { signIn } from "@/helpers/auth";
import { useToggle } from "@/hooks/common/toggle";
import { errorParser } from "@/lib/utils";
import { SignInSchema, SignInSchemaType } from "@/schema/auth";

export const Signin: FC = () => {
  const { toggle: showPassword, handleToggle } = useToggle();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess(data) {
      toast.success("Signed in successfully, you will be redirected soon");
      if (!data.email_verified_at) {
        window.location.href = "/confirm-email";
        return;
      }
      window.location.href = "/dashboard";
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <form onSubmit={onSubmit} className={"space-y-4"}>
      <FormField
        iconLeft={<Mail size={18} />}
        label={"Email"}
        type={"email"}
        {...register("email")}
        error={errors.email?.message}
      />
      <div className={"space-y-1"}>
        <FormField
          iconLeft={<Lock size={18} />}
          iconRight={
            showPassword ? (
              <button type={"button"} onClick={handleToggle}>
                <EyeClosed size={18} />
              </button>
            ) : (
              <button type={"button"} onClick={handleToggle}>
                <Eye size={18} />
              </button>
            )
          }
          label={"Password"}
          type={showPassword ? "text" : "password"}
          {...register("password")}
          error={errors.password?.message}
        />
        <div className="flex justify-end text-[#DE03B5]">
          <Link href={"/forgot-password"} className={"text-xs"}>
            Forgot password?
          </Link>
        </div>
      </div>
      <div>
        <Button
          disabled={isPending}
          className={"font-bold rounded-lg w-full"}
          size={"lg"}
        >
          Sign in
        </Button>
      </div>
      <p className="text-center font-medium text-xs text-[#535862]">
        By signing in, you agree to our{" "}
        <Link href={"/"} className={"text-[#DE03B5]"}>
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={"/"} className={"text-[#DE03B5]"}>
          Privacy Policy.
        </Link>
      </p>
      <Divider className={"bg-[#E9EAEB]"} />
      <p
        className={
          "text-[#535862] text-center text-sm md:text-base font-medium"
        }
      >
        No account?{" "}
        <Link className={"text-[#DE03B5]"} href={"/signup"}>
          Sign up
        </Link>
      </p>
    </form>
  );
};
