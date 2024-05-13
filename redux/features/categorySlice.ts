import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "@/utils/Fetch";
import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";

const initialState = {
  selectedCategory: "Home",
  categoryVideos: [],
  isLoading: false
};
export const getCategoryVideos = createAsyncThunk(
  "redux/features/categorySlice",
  async (url) => {
    
    try {
      
      const { data } = await axios.get(`${base_url}/${url}`, options);
      return data.items;
    } catch (error) {
      console.log(error);
    }
  }
);
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(getCategoryVideos.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getCategoryVideos.fulfilled, (state, action) => {
            state.categoryVideos = action.payload;
            state.isLoading = false;
        })
        .addCase(getCategoryVideos.rejected, (state) => {
            state.isLoading = false;
        })
  },
});

export const { setSelectedCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
