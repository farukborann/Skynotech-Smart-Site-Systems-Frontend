// Request Models
export interface CreateSiteGroupRequest {
  name: string;
  address: string;
  province: string;
  district: string;
  users: string[];
}

export interface UpdateSiteGroupRequest {
  name?: string;
  address?: string;
  province?: string;
  district?: string;
  users?: string[];
}

// Response Models
export interface SiteGroupResponse {
  _id: string;
  name: string;
  sites: string[];
  siteGroupAdmins: string[];
  admins: string[];
  users: string[];
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
