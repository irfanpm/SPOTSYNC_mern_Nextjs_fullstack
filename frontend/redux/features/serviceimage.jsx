import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  image: []
};

const Serviceimage = createSlice({
  name: 'serviceimage',
  initialState: initialState,
  reducers: {
    send: (state, action) => {
      state.image.push(action.payload);
    },
    deletearray: (state, action) => {
      state.image = [];
      console.log('ansad');
    }
  }
});

export const { send, deletearray } = Serviceimage.actions; 
export default Serviceimage.reducer;
