import { getReq, patchReq, postReq, deleteReq } from "..";

import {
  CreateSiteRequest,
  SiteResponse,
  SitesResponse,
  UpdateSiteRequest,
} from "./models";
import { QueryWithIdRequest } from "../models";

export async function getSitesReq() {
  const data = await getReq<SitesResponse>("/sites");

  return data;
}

export async function getSiteByIdReq(query: QueryWithIdRequest) {
  const data = await getReq<SiteResponse>("/sites/" + query.id);

  return data;
}

export async function createSiteReq(payload: CreateSiteRequest) {
  const data = await postReq<SiteResponse>("/sites", payload);

  return data;
}

export async function updateSiteReq(
  query: QueryWithIdRequest,
  payload: UpdateSiteRequest
) {
  const data = await patchReq<SiteResponse>("/sites/" + query.id, payload);

  return data;
}

export async function deleteSiteReq(query: QueryWithIdRequest) {
  const data = await deleteReq<SiteResponse>("/sites/" + query.id);

  return data;
}
