import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";
import userSlice from "./reducers/userSlice";

export const reduxStore=configureStore({
    reducer:{

        app:appSlice,
        user:userSlice
    }
})