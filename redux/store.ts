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
import searchSlice from "./features/searchSlice";


export const store = () => {
  return configureStore({
    reducer: {
      category: categorySlice,
      video: videoSlice,
      search: searchSlice,
    }
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
