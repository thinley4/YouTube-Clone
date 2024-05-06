// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./features/todo-slice";

// export const store = configureStore({
//   reducer: {
//     todoReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "@/redux/features/categorySlice";
import videoSlice from "./features/videoSlice";
export const store = configureStore({
  reducer: {
    category: categorySlice,
    video: videoSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;