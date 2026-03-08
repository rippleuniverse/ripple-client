"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "@/components/common/button";
import { FormField } from "@/components/common/form/form-field";
import { eventCheckout, programCheckout } from "@/helpers/checkout";
import { usePrice } from "@/hooks/common/currency";
import { useLocalStorage } from "@/hooks/common/local-storage";
import { useProgram } from "@/hooks/programs";
import { madeSoulmaze } from "@/lib/fonts";
import { currencyFormatter, errorParser } from "@/lib/utils";
import {
  ProgramCheckoutSchema,
  ProgramCheckoutSchemaType,
} from "@/schema/checkout";
import { Currency } from "@/types/common";

export const CheckoutForm: FC = () => {
  const program = useProgram();
  const price = usePrice(program.data?.price);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<ProgramCheckoutSchemaType>({
    resolver: zodResolver(ProgramCheckoutSchema),
  });
  const { storedValue: currency } = useLocalStorage<Currency>(
    "currency",
    "USD",
  );

  const { mutate, isPending } = useMutation({
    mutationFn: programCheckout,
    onSuccess(paymentUrl) {
      toast.success("You will be redirected to the payment page soon...");
      window.location.href = paymentUrl;
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (!program.data) return;

    mutate({
      ...data,
      currency,
      programId: program.data.id,
    });
  });

  return (
    <form onSubmit={onSubmit} className={"space-y-6"}>
      <h3 className={`${madeSoulmaze.className}`}>Program information</h3>
      {program.data && (
        <div className="flex items-center gap-4">
          <Image
            src={program.data.featured_image}
            alt={"Program"}
            width={50}
            height={50}
            className={"size-14 md:size-16 object-cover rounded-lg"}
          />
          <div>
            <p className={"text-xs md:text-sm"}>{program.data.name}</p>
            {price && (
              <p className="font-bold">
                {currencyFormatter(price.currency, price.amount)}
              </p>
            )}
          </div>
        </div>
      )}
      <div>
        <FormField
          {...register("couponCode")}
          label={"Coupon code (Optional)"}
          error={errors.couponCode?.message}
        />
      </div>
      <Button disabled={isPending} size={"xl"}>
        Checkout
      </Button>
    </form>
  );
};
