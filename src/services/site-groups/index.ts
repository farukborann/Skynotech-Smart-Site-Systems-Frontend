import { getReq, postReq, patchReq, deleteReq } from "..";

import {
  CreateSiteGroupRequest,
  SiteGroupResponse,
  UpdateSiteGroupRequest,
} from "./models";
import { QueryWithIdRequest } from "../models";

export async function getAllSiteGroups() {
  const data = getReq<SiteGroupResponse[]>("/site-groups");

  return data;
}

export async function getSiteGroupById(query: QueryWithIdRequest) {
  const data = getReq<SiteGroupResponse>(`/site-groups/${query.id}`);

  return data;
}

export async function createSiteGroupReq(payload: CreateSiteGroupRequest) {
  const data = postReq<SiteGroupResponse>("/site-groups", payload);

  return data;
}

export async function updateSiteGroupReq(
  query: QueryWithIdRequest,
  payload: UpdateSiteGroupRequest
) {
  const data = patchReq<SiteGroupResponse>(`/site-groups/${query.id}`, payload);

  return data;
}

export async function deleteSiteGroupReq(query: QueryWithIdRequest) {
  const data = deleteReq<SiteGroupResponse>(`/site-groups/${query.id}`);

  return data;
}
