import { SiteResponse } from "../sites/models";
import { SubSystemResponse } from "../sub-systems/models";

// Request Models
export interface CreateScenarioRequest {
  name: string;
  subSystemId: string;
  sensorId?: string;
  min?: number;
  max?: number;
  startDate: string;
  endDate: string;
  ignitions: { [key: string]: 1 | 0 };
}

export interface UpdateScenarioRequest {
  name?: string;
  subSystemId?: string;
  sensorId?: string;
  min?: number;
  max?: number;
  startDate?: string;
  endDate?: string;
  ignitions?: { [key: string]: 1 | 0 };
}

// Response Models
export interface ScenarioResponse {
  _id: string;
  name: string;
  subSystemId: string;
  sensorId?: string;
  min?: number;
  max?: number;
  startDate: string;
  endDate: string;
  ignitions: { [key: string]: 1 | 0 };
  deleted: boolean;
  createdAt: string;
}

export interface UsersScenario {
  scenario: ScenarioResponse;
  subSystem: SubSystemResponse;
  site: SiteResponse;
}
