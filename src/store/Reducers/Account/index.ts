import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { UserInitialState } from "./models";
import { GetProfileThunk } from "./thunks";

const unauthedPaths = ["/login", "/forgot-password"];

const AccountSlice = createSlice({
  name: "accountSlice",
  initialState: UserInitialState,
  reducers: {
    ResetUser: (state) => {
      Object.assign(state, UserInitialState);
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(isAnyOf(GetProfileThunk.pending), (state) => {
        state.loading = true;
      })
      .addMatcher(isAnyOf(GetProfileThunk.fulfilled), (state, action) => {
        state.loading = false;
        state.data = action.payload;

        // Redirect to home page if user is on login page
        if (
          unauthedPaths.includes(window.location.pathname) &&
          action.payload._id
        ) {
          window.location.href = "/home";
        }
      })
      .addMatcher(isAnyOf(GetProfileThunk.rejected), (state, action) => {
        state.loading = false;
        // TODO: clear cookies

        // Redirect to login page
        if (!unauthedPaths.includes(window.location.pathname))
          window.location.href = "/login";

        state.error = action.payload as string;
      });
  },
});

export const { ResetUser } = AccountSlice.actions;
export default AccountSlice.reducer;
