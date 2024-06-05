import { AxiosError } from "axios";

export interface ResponseError {
  error: string;
  message: string | string[];
  statusCode: number;
}

export type ErrorResponseType = {
  error: {
    axiosError: AxiosError;
    responseError: ResponseError;
  };
};
export type SuccessResponseType<T> = { result: T };

export type ResponseType<T> = SuccessResponseType<T> | ErrorResponseType;

// Global Request Models

export interface QueryWithIdRequest {
  id: string;
}

// Global Response Models

export interface MessageResponse {
  message: string;
}
