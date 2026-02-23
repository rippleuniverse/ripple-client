import { FC } from "react";
import { IconProps } from "@/components/common/icons/index";
import { cn } from "@/lib/utils";

export const Search: FC<IconProps> = ({
  className,
  size = 18,
  ...restProps
}) => {
  const c = cn(className);
  return (
    <svg
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={c}
      {...restProps}
    >
      <path
        d="M7.65667 14.3133C11.333 14.3133 14.3133 11.333 14.3133 7.65667C14.3133 3.98029 11.333 1 7.65667 1C3.98029 1 1 3.98029 1 7.65667C1 11.333 3.98029 14.3133 7.65667 14.3133Z"
        fill="currentColor"
      />
      <path
        d="M15.9775 15.9775L12.3579 12.3579M14.3133 7.65667C14.3133 11.333 11.333 14.3133 7.65667 14.3133C3.98029 14.3133 1 11.333 1 7.65667C1 3.98029 3.98029 1 7.65667 1C11.333 1 14.3133 3.98029 14.3133 7.65667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
