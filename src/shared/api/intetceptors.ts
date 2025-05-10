import { AxiosError, AxiosResponse } from "axios";

export const responseInterceptor = (res: AxiosResponse) => {
  return res;
};

export const errorInterceptor = (error: AxiosError) => {
  const status = error.response?.status;
  const data = error.response?.data as { message?: string; code?: string };

  return Promise.reject({
    status,
    message: data?.message ?? "Unknown error occurred",
    code: data?.code ?? "UNKNOWN",
    raw: error,
  });
};
