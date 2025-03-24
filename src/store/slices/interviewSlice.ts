import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uploadResumeForAnalysis } from "@/actions/interviewAction";


interface InterviewState {
  skills: string[];
  loading: boolean;
  error: string | null;
}

const initialState: InterviewState = {
  skills: [],
  loading: false,
  error: null,
};

const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadResumeForAnalysis.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadResumeForAnalysis.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload.skills;
      })
      .addCase(uploadResumeForAnalysis.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default interviewSlice.reducer;
// export const { userData } = mainSlice.actions;



// const mainSlice = createSlice({
//   name: "main",
//   initialState,
//   reducers: {
//     // login: (state) => {
//     //   state.isAuthenticated = true;
//     // },

//     userData: (state, action) => {
//       state.loading=false,
//       state.isAuthenticated=true
//     },
//     // logout: (state) => {
//     //   state.isAuthenticated = false;
//     //   state.user = null;
//     // },
//   },

//   },
// });
