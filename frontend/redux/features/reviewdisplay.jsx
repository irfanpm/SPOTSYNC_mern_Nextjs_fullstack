import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from "cookies-next";

const initialState = {
  loading: false,
  review: [],
  error: null, 
};

const cookie = getCookie('token');

export const getReview = createAsyncThunk('user/review', async (id) => {
  // try {
    const res = await axios.post('http://127.0.0.1:8000/api/user/displayreview',{
      serviceid:id
    },{
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    return res.data;
 
});

const reviewSlice = createSlice({
  name: 'getReview',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReview.pending,(state) => {
        state.loading = true;
        state.error = null; // Reset error when a new request starts
      })
      .addCase(getReview.fulfilled, (state, action) => {
        state.loading = false;
        state.review = action.payload;
        state.error = null; // Reset error on success
      })
      .addCase(getReview.rejected, (state, action) => {
        state.loading = true;
        state.review = [];
        state.error = action.error.message;
      });
  },
});

export default reviewSlice.reducer;
