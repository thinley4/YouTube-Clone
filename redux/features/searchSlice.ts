import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "@/utils/Fetch";

const initialState = {
  searchResults: [],
  isLoading: false,
};

const base_url = "https://youtube-v31.p.rapidapi.com";

export const searchById = createAsyncThunk("redux/searchById", async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data.items;
  } catch (error) {
    console.log("Error while searching");
  }
});

const searchSlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchById.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(searchById.fulfilled, (state, action) => {
                state.searchResults = action.payload;
                state.isLoading = false;
            })
            .addCase(searchById.rejected, (state, action) => {
                state.isLoading = false;
                console.log("rejected");
            })
    }
})

export default searchSlice.reducer;

// const searchSlice = createSlice({
//   name: "search",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [searchById.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [searchById.fulfilled]: (state, { payload }) => {
//       state.searchResults = payload;
//       state.isLoading = false;
//     },
//     [searchById.rejected]: (state) => {
//       state.isLoading = false;
//       console.log("request rejected");
//     },
//   },
// });
// export default searchSlice.reducer;
