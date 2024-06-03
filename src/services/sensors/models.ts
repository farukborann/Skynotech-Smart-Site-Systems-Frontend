// Request Models
export interface CreateSensorRequest {
  name: string;
  subSystemId: string;
  mqttTopic: string;
}

export interface UpdateSensorRequest {
  name?: string;
  subSystemId?: string;
  mqttTopic?: string;
}

// Response Models
export interface SensorResponse {
  _id: string;
  name: string;
  subSystemId: string;
  mqttTopic: string;
  createdAt: string;
}
