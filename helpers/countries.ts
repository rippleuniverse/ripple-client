import axios from "axios";

export const getCountries = async (): Promise<
  {
    name: string;
    dial_code: string;
    code: string;
  }[]
> => {
  return axios({
    url: "/countries.json",
  }).then((res) => res.data);
};
