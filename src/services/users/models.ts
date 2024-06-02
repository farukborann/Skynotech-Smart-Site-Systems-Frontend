// Request Models
export enum RoleEnum {
  SUPER_ADMIN = "SUPER_ADMIN", // Access to everything
  USER = "USER",
}

export const RoleEnumArray = ["SUPER_ADMIN", "USER"];
export type RoleEnumType = "SUPER_ADMIN" | "USER";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  phoneNumber: string;
  role: RoleEnumType;
}

export interface UpdateUserRequest {
  email?: string;
  password?: string;
  phoneNumber?: string;
  role?: RoleEnumType;
}

export interface UpdatePrivacySettingsRequest {
  showEmail: boolean;
  showPhoneNumber: boolean;
  showProfilePhoto: boolean;
}

// Response Models
export interface ProfileResponse {
  _id: string;
  email: string;
  profilePhoto: string;
  phoneNumber: string;
  role: string;
  privacySettings: PrivacySettings;
  createdAt: string;
}

export interface PrivacySettings {
  showEmail: boolean;
  showPhoneNumber: boolean;
  showProfilePhoto: boolean;
}
