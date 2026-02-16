"use client";

import { ChevronDown } from "lucide-react";
import { FC } from "react";
import { useLocalStorage } from "@/hooks/common/local-storage";
import { Currency } from "@/types/common";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown";

export const CurrencySwitch: FC = () => {
  const { storedValue, handleSetValue } = useLocalStorage<Currency>(
    "currency",
    "USD",
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <span>{storedValue}</span>
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="start">
        <DropdownMenuItem asChild>
          <Button
            className="w-full"
            variant={"ghost"}
            onClick={() => handleSetValue("USD")}
          >
            USD
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button
            className="w-full"
            variant={"ghost"}
            onClick={() => handleSetValue("NGN")}
          >
            NGN
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
