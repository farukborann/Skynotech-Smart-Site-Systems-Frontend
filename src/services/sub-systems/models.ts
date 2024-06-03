// Request Models
export interface CreateSubSystemRequest {
  systemType: SystemTypeType;
  siteId: string;
  mqttTopic: string;
  ignitionCount: number;
}

export interface UpdateSubSystemRequest {
  systemType?: string;
  siteId?: string;
  mqttTopic?: string;
  ignitionCount?: number;
}

export interface UpdateIgnitionStatusRequest {
  ignitionIndex: number;
  status: boolean;
}

// Response Models
export interface SubSystemResponse {
  _id: string;
  systemType: SystemTypeType;
  siteId: string;
  mqttTopic: string;
  ignitionCount: number;
  lastIgnitionStatuses: { [key: string]: number };
  createdAt: string;
}

// General Models
export enum SystemTypeEnum {
  GARDEN_WATERING = "garden-watering",
  LIGHTING = "lighting",
  BOILER = "boiler",
  VENTILATION = "ventilation",
  POOL = "pool",
  WASTE_WATER_PUMP = "waste-water-pump",
}

export type SystemTypeType =
  | "garden-watering"
  | "lighting"
  | "boiler"
  | "ventilation"
  | "pool"
  | "waste-water-pump";

export const SystemTypeArray = [
  SystemTypeEnum.GARDEN_WATERING,
  SystemTypeEnum.LIGHTING,
  SystemTypeEnum.BOILER,
  SystemTypeEnum.VENTILATION,
  SystemTypeEnum.POOL,
  SystemTypeEnum.WASTE_WATER_PUMP,
];
