import { axiosInstance } from "@/lib/utils";
import { ApplicationSchemaType } from "@/schema/roles";
import { Paginated } from "@/types/common";

type JobType = "full_time" | "part_time" | "internship" | "contract";
type ExperienceLevel = "beginner" | "intermediate" | "expert";
type JobStyle = "on_site" | "remote" | "hybrid";

export type OpenRole = {
  id: string;
  name: string;
  company_name: string;
  company_location: string;
  type: JobType;
  experience_level: ExperienceLevel;
  style: JobStyle;
  salary: string;
  description: string;
  about_company: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  created_at: string;
};

export const getOpenRoles = async (
  page: string | null,
  search: string | null,
  experienceLevel: string | null,
  type: string | null,
  style: string | null,
): Promise<Paginated<OpenRole[]>> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: "/roles",
    params: {
      page,
      search,
      type,
      style,
      experience_level: experienceLevel,
    },
  }).then((res) => res.data.data);
};

export const getRole = async (id: string | null): Promise<OpenRole> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/roles/${id}`,
  }).then((res) => res.data.data);
};

export const submitApplication = async (
  data: ApplicationSchemaType & { slug: string },
) => {
  const { AppAxios } = axiosInstance();

  const formData = new FormData();

  formData.append("first_name", data.firstName);
  formData.append("last_name", data.lastName);
  formData.append("open_role_id", data.slug);
  formData.append("email", data.email);
  formData.append("phone", `${data.phoneDialCode}${data.phoneNumber}`);
  formData.append("cv", data.cv);
  if (data.personalUrl) {
    formData.append("personal_url", data.personalUrl);
  }

  return AppAxios({
    url: "/job-applications",
    method: "POST",
    data: formData,
  });
};

export const getOverviewRoles = async (): Promise<OpenRole[]> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/roles/overview",
  }).then((res) => res.data.data);
};
