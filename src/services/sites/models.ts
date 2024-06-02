// Request Models
export interface CreateSiteRequest {
  name: string;
  address: string;
  province: string;
  district: string;
  mqttTopic: string;
  admins: string[];
  users: string[];
}

export interface UpdateSiteRequest {
  name?: string;
  address?: string;
  province?: string;
  district?: string;
  mqttTopic?: string;
  admins?: string[];
  users?: string[];
}

// Response Models
export type SitesResponse = SiteResponse[];

export interface SiteResponse {
  _id: string;
  name: string;
  address: string;
  province: string;
  district: string;
  mqttTopic: string;
  admins: any[];
  users: any[];
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
