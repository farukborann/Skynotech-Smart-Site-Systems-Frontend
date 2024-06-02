import axios, { AxiosError } from "axios";

import { ResponseType } from "./models";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

export async function postReq<T>(
  url: string,
  data: any
): Promise<ResponseType<T>> {
  try {
    const response = await axios.post(url, data);
    return { result: response.data as T };
  } catch (error) {
    return { error: error as AxiosError };
  }
}

export async function getReq<T>(url: string): Promise<ResponseType<T>> {
  try {
    const response = await axios.get(url);
    return { result: response.data };
  } catch (error) {
    return { error: error as AxiosError };
  }
}

export async function patchReq<T>(
  url: string,
  data: any
): Promise<ResponseType<T>> {
  try {
    const response = await axios.patch(url, data);
    return { result: response.data };
  } catch (error) {
    return { error: error as AxiosError };
  }
}

export async function deleteReq<T>(url: string): Promise<ResponseType<T>> {
  try {
    const response = await axios.delete(url);
    return { result: response.data };
  } catch (error) {
    return { error: error as AxiosError };
  }
}
