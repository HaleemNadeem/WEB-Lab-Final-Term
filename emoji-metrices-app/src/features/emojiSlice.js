import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  emojis: [],
  status: 'idle',
  error: null,
};

export const fetchEmojis = createAsyncThunk('emoji/fetchEmojis', async () => {
  const response = await axios.get('https://github.com/cheatsnake/emojihub');
  return response.data;
});

const emojiSlice = createSlice({
  name: 'emoji',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEmojis.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmojis.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.emojis = action.payload;
      })
      .addCase(fetchEmojis.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default emojiSlice.reducer;
