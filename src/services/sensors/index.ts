import { getReq, postReq, patchReq, deleteReq } from "..";

import {
  CreateSensorRequest,
  SensorResponse,
  SensorValueResponse,
  UpdateSensorRequest,
} from "./models";
import { QueryWithIdRequest } from "../models";

export async function getAllSensorsReq() {
  const data = await getReq<SensorResponse[]>("/sensors");

  return data;
}

export async function getSensorByIdReq(query: QueryWithIdRequest) {
  const data = await getReq<SensorResponse>(`/sensors/${query.id}`);

  return data;
}

export async function getSensorsBySubSystemIdReq(query: QueryWithIdRequest) {
  const data = await getReq<SensorResponse[]>(
    `/sensors/sub-system/${query.id}`
  );

  return data;
}

export async function createSensorReq(payload: CreateSensorRequest) {
  const data = await postReq<SensorResponse>("/sensors", payload);

  return data;
}

export async function updateSensorReq(
  query: QueryWithIdRequest,
  payload: UpdateSensorRequest
) {
  const data = await patchReq<SensorResponse>(`/sensors/${query.id}`, payload);

  return data;
}

export async function deleteSensorReq(query: QueryWithIdRequest) {
  const data = await deleteReq<SensorResponse>(`/sensors/${query.id}`);

  return data;
}

export async function getSensorsValue(query: QueryWithIdRequest) {
  const data = await getReq<SensorValueResponse>(`/sensors/value/${query.id}`);

  return data;
}
