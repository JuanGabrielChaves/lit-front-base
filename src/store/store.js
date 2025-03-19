/** @format */

import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./slices/mySlice.js";
import usersSlice from "./slices/usersSlice.js";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
    reducer: {
        mySlice: mySlice,
        users: usersSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});
