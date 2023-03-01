import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailReducer from "./modules/detail"
const store = configureStore({
  reducer: {
    home: homeReducer,//通过createSlice --reducer
    entire: entireReducer, //普通方式 -- reducer
    detail: detailReducer
  }
})

export default store