// Request Models
export interface CreateSubSystemRequest {
  systemType: string;
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
export type SubSystemsResponse = SubSystemResponse[];

export interface SubSystemResponse {
  _id: string;
  systemType: string;
  siteId: string;
  mqttTopic: string;
  ignitionCount: number;
  lastIgnitionStatuses: { [key: string]: number };
  createdAt: string;
}
