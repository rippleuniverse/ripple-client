import { IdCard } from "lucide-react";
import { FC } from "react";
import { PersonalInformationForm } from "@/components/settings/personal-information/form";

export const PersonalInformation: FC = () => {
  return (
    <div
      className={"xl:w-8/12 border border-gray-200 rounded-2xl p-8 space-y-4"}
    >
      <h2
        className={
          "font-semibold text-base md:text-xl flex space-x-2 items-center"
        }
      >
        <IdCard className={"text-secondary-light"} />
        <span>Personal Information</span>
      </h2>
      <PersonalInformationForm />
    </div>
  );
};
