import { FC } from "react";
import { IconProps } from "@/components/common/icons/index";
import { cn } from "@/lib/utils";

export const ArrowDownload: FC<IconProps> = ({
  className,
  size = 18,
  ...restProps
}) => {
  const c = cn(className);
  return (
    <svg
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={c}
      {...restProps}
    >
      <path
        d="M11.5781 6H9.98438V0.984375C9.98438 0.46875 9.51562 0 9 0H4.96875C4.45312 0 3.98438 0.46875 3.98438 0.984375V6H2.39062C1.5 6 1.03125 7.07812 1.6875 7.6875L6.28125 12.2812C6.65625 12.7031 7.3125 12.7031 7.6875 12.2812L12.2812 7.6875C12.8906 7.07812 12.4688 6 11.5781 6ZM0 15.9844C0 16.5469 0.421875 17.0156 0.984375 17.0156H12.9844C13.5469 17.0156 13.9688 16.5469 13.9688 15.9844C13.9688 15.4688 13.5469 15 12.9844 15H0.984375C0.421875 15 0 15.4688 0 15.9844Z"
        fill="currentColor"
      />
    </svg>
  );
};
