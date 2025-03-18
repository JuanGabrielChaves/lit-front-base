/** @format */

import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./slices/mySlice.js";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
    reducer: {
        mySlice: mySlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});
