"use client";

import { Copy } from "lucide-react";
import { FC } from "react";
import { toast } from "react-hot-toast";
import { Badge } from "@/components/common/badge";
import { useAuth } from "@/hooks/auth";
import { useUserCoupon } from "@/hooks/coupon";
import { madeSoulmaze } from "@/lib/fonts";
import styles from "./styles.module.css";
export const DigitalPass: FC = () => {
  const { user } = useAuth();
  const coupon = useUserCoupon();

  const copyCouponCode = async () => {
    try {
      if (!coupon.data) return;
      await navigator.clipboard.writeText(coupon.data.code);
      toast.success("Coupon code has been copied to clipboard");
    } catch (e) {
      toast.error("Failed to copy coupon code to clipboard");
    }
  };

  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
      <div
        className={`w-full flex flex-col justify-between p-6 rounded-2xl h-45 lg:h-60 ${coupon.data?.is_active ? styles.passcard : styles.inactivepasscard}`}
      >
        {coupon.data?.is_active === false && (
          <div className="flex justify-end">
            <Badge className={"font-normal"} variant={"destructive"}>
              Not active
            </Badge>
          </div>
        )}
        <div className="flex justify-between">
          <div className={"text-xs uppercase"}>
            <p className={"text-white/60 font-bold"}>Ripple Universe ID</p>
            <h3
              className={`${madeSoulmaze.className} text-lg md:text-2xl text-white`}
            >
              Digital Pass{" "}
            </h3>
          </div>
          <div
            className={`rounded-full backdrop-blur-3xl border border-white/30 size-12 ${styles.icon} grid place-items-center`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0H1.96875C0.890625 0 0 0.890625 0 1.96875V18C0 19.0781 0.890625 19.9688 1.96875 19.9688H18C19.0781 19.9688 19.9688 19.0781 19.9688 18V1.96875C19.9688 0.890625 19.0781 0 18 0ZM16.9688 18H3C2.4375 18 1.96875 17.5312 1.96875 16.9688V3C1.96875 2.4375 2.4375 1.96875 3 1.96875H16.9688C17.5312 1.96875 18 2.4375 18 3V16.9688C18 17.5312 17.5312 18 16.9688 18ZM13.9688 3.98438H10.9688C9.89062 3.98438 9 4.875 9 6V8.25C8.39062 8.625 7.96875 9.23438 7.96875 9.98438C7.96875 11.0625 8.90625 12 9.98438 12C11.0625 12 12 11.0625 12 9.98438C12 9.23438 11.5781 8.625 10.9688 8.25V6H13.9688V12.9844C13.9688 13.5469 13.5469 13.9688 12.9844 13.9688H6.98438C6.42188 13.9688 6 13.5469 6 12.9844V6H6.98438C7.54688 6 7.96875 5.53125 7.96875 4.96875C7.96875 4.45312 7.54688 3.98438 6.98438 3.98438H6C4.875 3.98438 3.98438 4.875 3.98438 6V13.9688C3.98438 15.0938 4.875 15.9844 6 15.9844H13.9688C15.0938 15.9844 15.9844 15.0938 15.9844 13.9688V6C15.9844 4.875 15.0938 3.98438 13.9688 3.98438Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className={"text-xs uppercase"}>
          <p className={"text-white/60 font-bold "}>
            Code ({coupon.data?.percentage_value}% off)
          </p>
          <button
            onClick={copyCouponCode}
            disabled={!coupon.data}
            className={
              "disabled:opacity-50 flex items-center space-x-2 cursor-pointer font-bold text-sm md:text-xl text-white uppercase\`"
            }
            title={"Copy coupon code"}
          >
            <span>{coupon.data?.code}</span>
            <Copy className={"size-4"} />
          </button>
        </div>
        <div className="flex justify-between">
          <div className={"text-xs uppercase"}>
            <p className={"text-white/60 font-bold "}>Card Holder</p>
            <h3 className={`font-bold text-sm md:text-xl text-white uppercase`}>
              {user.data?.full_name}
            </h3>
          </div>
          <div className={"text-xs uppercase"}>
            <p className={"text-white/60 font-bold "}>Member Since</p>
            <h3 className={`font-bold text-sm md:text-xl text-white`}>
              {user.data?.created_at}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
