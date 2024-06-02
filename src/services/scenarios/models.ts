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
export type ScenariosResponse = ScenarioResponse[];

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
