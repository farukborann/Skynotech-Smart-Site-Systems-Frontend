import { getReq, postReq, patchReq, deleteReq } from "..";

import {
  CreateSubSystemRequest,
  SubSystemResponse,
  SubSystemsResponse,
  UpdateIgnitionStatusRequest,
  UpdateSubSystemRequest,
} from "./models";
import { QueryWithIdRequest } from "../models";

export async function getAllSubSystemsReq() {
  const data = await getReq<SubSystemsResponse>("/sub-systems");

  return data;
}

export async function getSubSystemByIdReq(query: QueryWithIdRequest) {
  const data = await getReq<SubSystemResponse>(`/sub-systems/${query.id}`);

  return data;
}

export async function getSubSystemsBySiteIdReq(query: QueryWithIdRequest) {
  const data = await getReq<SubSystemsResponse>(
    `/sub-systems/site/${query.id}`
  );

  return data;
}

export async function createSubSystemReq(payload: CreateSubSystemRequest) {
  const data = await postReq<SubSystemResponse>("/sub-systems", payload);

  return data;
}

export async function updateSubSystemReq(
  query: QueryWithIdRequest,
  payload: UpdateSubSystemRequest
) {
  const data = await patchReq<SubSystemResponse>(
    `/sub-systems/${query.id}`,
    payload
  );

  return data;
}

export async function deleteSubSystemReq(query: QueryWithIdRequest) {
  const data = await deleteReq<SubSystemResponse>(`/sub-systems/${query.id}`);

  return data;
}

export async function updateIgnitionStatusReq(
  query: QueryWithIdRequest,
  payload: UpdateIgnitionStatusRequest
) {
  const data = await postReq<SubSystemResponse>(
    `/sub-systems/${query.id}/ignition`,
    payload
  );

  return data;
}
