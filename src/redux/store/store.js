import { configureStore } from "@reduxjs/toolkit";
import { NewsReducer } from "../reducer/new.reducer";
import createSagaMiddleware from "redux-saga";
import news from "../saga/news.saga";

const sagaMiddileware = createSagaMiddleware();

export const store = configureStore({
    reducer: NewsReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddileware),
    devTools: process.env.NODE_ENV !== "production" ? true : false
})

sagaMiddileware.run(news)