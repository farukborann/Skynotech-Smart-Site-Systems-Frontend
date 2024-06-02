import { getReq, postReq, patchReq, deleteReq } from "..";

import {
  CreateScenarioRequest,
  ScenarioResponse,
  ScenariosResponse,
  UpdateScenarioRequest,
} from "./models";
import { QueryWithIdRequest } from "../models";

export async function getSensorsScenariosReq(query: QueryWithIdRequest) {
  const data = await getReq<ScenariosResponse>(`/scenarios/${query.id}`);

  return data;
}

export async function createScenarioReq(payload: CreateScenarioRequest) {
  const data = await postReq<ScenarioResponse>(`/scenarios`, payload);

  return data;
}

export async function deleteScenarioReq(query: QueryWithIdRequest) {
  const data = await deleteReq<ScenarioResponse>(`/scenarios/${query.id}`);

  return data;
}

export async function updateScenarioReq(
  query: QueryWithIdRequest,
  payload: UpdateScenarioRequest
) {
  const data = await patchReq<ScenarioResponse>(
    `/scenarios/${query.id}`,
    payload
  );

  return data;
}
