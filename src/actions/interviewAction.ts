import { createAsyncThunk } from "@reduxjs/toolkit";
import { afterfieldRes } from "@/services/interviewServices";


export const uploadResumeForAnalysis = createAsyncThunk(
  "interview/uploadResume",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      return await afterfieldRes(formData);
    } catch (error:any) {
      return rejectWithValue(error.response?.data || "something went wrong");

    }
  }
);
