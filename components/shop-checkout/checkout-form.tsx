"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "@/components/common/button";
import { Checkbox } from "@/components/common/form/checkbox";
import { ErrorText } from "@/components/common/form/error-text";
import { FormField } from "@/components/common/form/form-field";
import { Label } from "@/components/common/form/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/common/form/native-select";
import { BillingInfo } from "@/helpers/billing-info";
import { shopCheckout } from "@/helpers/checkout";
import { useAuthenticated } from "@/hooks/auth";
import { useBillingInfo } from "@/hooks/billing-info";
import { useCountries } from "@/hooks/common/countries";
import { useLocalStorage } from "@/hooks/common/local-storage";
import { madeSoulmaze } from "@/lib/fonts";
import { errorParser } from "@/lib/utils";
import { ShopCheckoutSchema, ShopCheckoutSchemaType } from "@/schema/checkout";
import { Currency } from "@/types/common";

export const CheckoutForm: FC = () => {
  useAuthenticated();
  const info = useBillingInfo();

  return <Form info={info.data} key={JSON.stringify(info.data)} />;
};

type FormProps = {
  info?: BillingInfo | null;
};
export const Form: FC<FormProps> = ({ info }) => {
  const { slug } = useParams();
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
    handleSubmit,
  } = useForm<ShopCheckoutSchemaType>({
    resolver: zodResolver(ShopCheckoutSchema),
    defaultValues: info
      ? {
          firstName: info.first_name,
          lastName: info.last_name,
          email: info.email,
          phone: info.phone,
          apartment: info.apartment,
          city: info.city,
          country: info.country,
          saveBillingInfo: false,
          quantity: 1,
          couponCode: null,
        }
      : {
          saveBillingInfo: false,
          quantity: 1,
          couponCode: null,
        },
  });
  const countries = useCountries();
  const { storedValue: currency } = useLocalStorage<Currency>(
    "currency",
    "USD",
  );

  const { mutate, isPending } = useMutation({
    mutationFn: shopCheckout,
    onSuccess(paymentUrl) {
      toast.success("You will be redirected to the payment page soon...");
      window.location.href = paymentUrl;
    },
    onError(err) {
      toast.error(errorParser(err));
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate({
      ...data,
      currency,
      productId: slug as string,
    });
  });

  return (
    <form onSubmit={onSubmit} className={"space-y-6"}>
      <h3 className={`${madeSoulmaze.className}`}>Billing Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          error={errors.firstName?.message}
          label={"First name"}
          {...register("firstName")}
        />
        <FormField
          error={errors.lastName?.message}
          label={"Last name"}
          {...register("lastName")}
        />
        <FormField
          error={errors.email?.message}
          label={"Email address"}
          type={"email"}
          {...register("email")}
        />
        <FormField
          error={errors.phone?.message}
          label={"Phone"}
          {...register("phone")}
        />
        <FormField
          error={errors.apartment?.message}
          label={"Apartment"}
          {...register("apartment")}
        />
        <FormField
          error={errors.city?.message}
          label={"City"}
          {...register("city")}
        />

        <div className="space-y-1">
          <Label>Country</Label>
          <NativeSelect
            className={"w-full"}
            inputClassName={"border-[#D5D7DA] h-11"}
            {...register("country")}
          >
            <NativeSelectOption value={""}>
              --Select an option--
            </NativeSelectOption>

            {countries.data?.map((item, index) => (
              <NativeSelectOption key={index}>{item.name}</NativeSelectOption>
            ))}
          </NativeSelect>
          {errors.country?.message && (
            <ErrorText>{errors.country.message}</ErrorText>
          )}
        </div>
      </div>
      <Label className="flex items-center space-x-1">
        <Checkbox
          onCheckedChange={(val) => {
            if (typeof val !== "boolean") return;
            setValue("saveBillingInfo", val);
            clearErrors("saveBillingInfo");
          }}
        />
        <span className={"text-xs md:text-sm"}>Save billing information?</span>
      </Label>
      <div>
        <FormField
          {...register("couponCode")}
          label={"Coupon code (Optional)"}
        />
      </div>
      <h3 className={`${madeSoulmaze.className}`}>Product Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label={"Quantity"}
          type={"number"}
          step={1}
          min={1}
          {...register("quantity", {
            valueAsNumber: true,
          })}
        />
      </div>

      <Button disabled={isPending} size={"xl"}>
        Checkout
      </Button>
    </form>
  );
};
