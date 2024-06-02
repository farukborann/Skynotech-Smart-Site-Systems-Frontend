import { AxiosError } from "axios";

export type ErrorResponseType = { error: AxiosError };
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
