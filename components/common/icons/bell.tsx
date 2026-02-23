import { FC } from "react";
import { IconProps } from "@/components/common/icons/index";
import { cn } from "@/lib/utils";

export const Bell: FC<IconProps> = ({ className, size = 18, ...restProps }) => {
  const c = cn(className);
  return (
    <svg
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={c}
      {...restProps}
    >
      <path
        d="M7.59917 19.5C8.6773 19.5 9.6148 18.6094 9.6148 17.5312H5.58355C5.58355 18.6094 6.47417 19.5 7.59917 19.5ZM13.5992 13.5V8.53125C13.5992 5.4375 11.9585 2.85938 9.09917 2.20312V1.5C9.09917 0.703125 8.44292 0 7.59917 0C6.75542 0 6.09917 0.703125 6.09917 1.5V2.20312C3.2398 2.85938 1.59917 5.4375 1.59917 8.53125V13.5L0.286675 14.8125C-0.3227 15.4219 0.0991749 16.5 0.9898 16.5H14.1617C15.0523 16.5 15.521 15.4219 14.9117 14.8125L13.5992 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
