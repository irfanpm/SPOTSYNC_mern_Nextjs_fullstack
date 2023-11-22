import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCookie } from "cookies-next";
import { axiosInstance } from '../axioseInstance';

const initialState = {
  loading: false,
  user: [],
  service:[],
  Userblock:[],
  Serviceblock:[],
  error: null, 
};







const cookie = getCookie('token');

export const adminfetchUser = createAsyncThunk('admin/adminfetchUser', async () => {
  // try {
    const res = await axiosInstance.get('/api/admin/getusers',
    );
    console.log(res)
    return res.data;
  
});
export const adminfetchService = createAsyncThunk('admin/adminfetchService', async () => {
  // try {
    const res = await axiosInstance.get('/api/admin/getservices',);
    console.log(res)
    return res.data;
  
});

export const adminBlockUser = createAsyncThunk('admin/adminBlockUser', async (id) => {
  // try {
    const res = await axiosInstance.post('/api/admin/userblock',{
      id:id
});
    console.log(res)
    return res.data;
  
});

export const adminBlockService = createAsyncThunk('admin/adminBlockService', async (id) => {
  // try {
    const res = await axiosInstance.post('/api/admin/serviceblock',{
      id:id
    });
    console.log(res)
    return res.data;
  
});
export const adminGetBlockuser = createAsyncThunk('admin/adminGetBlockuser', async () => {
  // try {
    const res = await axiosInstance.get('/api/admin/getblockuser',);
    console.log(res)
    return res.data;
  
});
export const adminGetBlockService = createAsyncThunk('admin/adminGetBlockService', async () => {
  // try {
    const res = await axiosInstance.get('/api/admin/getblockservice',);
    console.log(res)
    return res.data;
  
});





















const adminSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(adminfetchUser.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(adminfetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null; 
      })
      .addCase(adminfetchUser.rejected, (state, action) => {
        state.loading = true;
        state.user = [];
        state.error = action.error.message;
      })
      .addCase(adminfetchService.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload;
        state.error = null; 
      })
      .addCase(adminBlockUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null; 
      })
      .addCase(adminBlockService.fulfilled, (state) => {
        state.loading = false;
        state.error = null; 
      })
      .addCase(adminGetBlockuser.fulfilled, (state, action) => {
        state.loading = false;
        state.Userblock = action.payload;
        state.error = null; 
      })
      .addCase(adminGetBlockService.fulfilled, (state, action) => {
        state.loading = false;
        state.Serviceblock = action.payload;
        state.error = null; 
      })
  },
});



export default adminSlice.reducer;
