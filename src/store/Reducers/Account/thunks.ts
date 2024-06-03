import { profileReq } from "src/services/users";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetProfileThunk = createAsyncThunk(
  "GetProfileThunk",
  async (_, thunkApi) => {
    const response = await profileReq();

    if ("error" in response) {
      return thunkApi.rejectWithValue(response.error.message);
    }

    return response.result;
  }
);
