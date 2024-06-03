import { SensorResponse } from "../sensors/models";
import { SiteResponse } from "../sites/models";
import { SubSystemResponse } from "../sub-systems/models";

// Request Models
export interface CreateScenarioRequest {
  name: string;
  sensorId: string;
  min: number;
  max: number;
  startDate: string;
  endDate: string;
  ignitions: ScenarioIgnition[];
}

export interface UpdateScenarioRequest {
  name?: string;
  sensorId?: string;
  min?: number;
  max?: number;
  startDate?: string;
  endDate?: string;
  ignitions?: ScenarioIgnition[];
}

// Response Models
export interface ScenarioResponse {
  _id: string;
  name: string;
  sensorId: string;
  min: number;
  max: number;
  startDate: string;
  endDate: string;
  ignitions: ScenarioIgnition[];
  deleted: boolean;
  createdAt: string;
}

// General Models
export interface ScenarioIgnition {
  ignitionIndex: number;
  status: boolean;
}

export interface UsersScenario {
  scenario: ScenarioResponse;
  sensor: SensorResponse;
  subSystem: SubSystemResponse;
  site: SiteResponse;
}
