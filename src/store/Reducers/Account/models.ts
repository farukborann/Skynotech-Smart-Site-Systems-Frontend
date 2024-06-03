import { ProfileResponse } from "../../../services/users/models";

export interface UserModel {
  loading: boolean;
  error: string;
  data: ProfileResponse;
}

export const UserInitialState: UserModel = {
  loading: false,
  error: "",
  data: {
    _id: "",
    email: "",
    createdAt: "",
    phoneNumber: "",
    privacySettings: {
      showEmail: false,
      showPhoneNumber: false,
      showProfilePhoto: false,
    },
    profilePhoto: "",
    role: "",
  } as ProfileResponse,
};
