import { deleteReq, getReq, postReq } from "..";

import {
  ProfileResponse,
  CreateUserRequest,
  LoginRequest,
  UpdatePrivacySettingsRequest,
  GetExternalUserRequest,
  ExternalUserResponse,
} from "./models";
import { MessageResponse, QueryWithIdRequest } from "../models";

export async function loginReq(payload: LoginRequest) {
  const data = await postReq<ProfileResponse>("/users/login", payload);

  return data;
}

export async function logoutReq() {
  const data = await getReq<MessageResponse>("/users/logout");

  return data;
}

export async function profileReq() {
  const data = await getReq<ProfileResponse>("/users/profile");

  return data;
}

export async function createUserReq(payload: CreateUserRequest) {
  const data = await postReq<ProfileResponse>("/users", payload);

  return data;
}

export async function updateUserReq(
  query: QueryWithIdRequest,
  payload: CreateUserRequest
) {
  const data = await postReq<ProfileResponse>(`/users/${query.id}`, payload);

  return data;
}

export async function updatePrivacySettingsReq(
  payload: UpdatePrivacySettingsRequest
) {
  const data = await postReq<ProfileResponse>(
    "/users/privacy-settings",
    payload
  );

  return data;
}

export async function deleteUserReq(query: QueryWithIdRequest) {
  const data = await deleteReq<MessageResponse>(`/users/${query.id}`);

  return data;
}

export async function getExternalUserReq(payload: GetExternalUserRequest) {
  const data = await postReq<ExternalUserResponse>(`/users/external`, payload);

  return data;
}
