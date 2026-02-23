import { FC } from "react";
import { IconProps } from "@/components/common/icons/index";
import { cn } from "@/lib/utils";

export const Compass: FC<IconProps> = ({
  className,
  size = 18,
  ...restProps
}) => {
  const c = cn(className);
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={c}
      {...restProps}
    >
      <path
        d="M9.98438 8.90625C9.375 8.90625 8.90625 9.375 8.90625 9.98438C8.90625 10.5938 9.375 11.0625 9.98438 11.0625C10.5938 11.0625 11.0625 10.5938 11.0625 9.98438C11.0625 9.375 10.5938 8.90625 9.98438 8.90625ZM9.98438 0C4.45312 0 0 4.45312 0 9.98438C0 15.5156 4.45312 19.9688 9.98438 19.9688C15.5156 19.9688 19.9688 15.5156 19.9688 9.98438C19.9688 4.45312 15.5156 0 9.98438 0ZM12.1875 12.1875L3.98438 15.9844L7.78125 7.78125L15.9844 3.98438L12.1875 12.1875Z"
        fill="currentColor"
      />
    </svg>
  );
};
