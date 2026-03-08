import { axiosInstance } from "@/lib/utils";
import { Paginated } from "@/types/common";

export type Event = {
  id: string;
  featured_image: string;
  title: string;
  description: string;
  date: string;
  access: "free" | "paid";
  type: "physical" | "online";
  created_at: string;
};

export type Facilitator = {
  name: string;
  role: string;
  company: string;
  description: string;
};

export type Ticket = {
  id: string;
  name: string;
  price: {
    currency: "USD" | "NGN";
    amount: string;
  }[];
  features: string[];
};

export type EventData = {
  id: string;
  title: string;
  date: string;
  description: string;
  featured_image: string;
  images: string[];
  category: {
    id: string;
    name: string;
  };
  access: "free" | "paid";
  type: "physical" | "online";
  created_at: string;
  what_to_expect: string[];
  who_to_expect: string[];
  agendas: string[];
  facilitators: Facilitator[];
  tickets: Ticket[];
};

export const getEvents = async (
  page: string | null,
  access: string | null,
  type: string | null,
  categoryId: string | null,
): Promise<Paginated<Event[]>> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/events",
    params: {
      page,
      access,
      type,
      event_category_id: categoryId,
    },
  }).then((res) => res.data.data);
};

export const getOverviewEvents = async (): Promise<Event[]> => {
  const { AppAxios } = axiosInstance();

  return AppAxios({
    url: "/events/overview",
  }).then((res) => res.data.data);
};
export const getEvent = async (id: string | null): Promise<EventData> => {
  const { AppAxios } = axiosInstance();
  return AppAxios({
    url: `/events/${id}`,
  }).then((res) => res.data.data);
};
