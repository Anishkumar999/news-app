import { GET_ALL_NEWS_START, GET_CATEGORY_NEWS_ERROR, GET_CATEGORY_NEWS_START, GET_CATEGORY_NEWS_SUCCESS } from "../constant/news.constant";
import { GET_ALL_NEWS_SUCCESS } from "../constant/news.constant";
import { GET_ALL_NEWS_ERROR } from "../constant/news.constant";

export const getNewsStart = () => ({
    type: GET_ALL_NEWS_START
})

export const getNewsSuccess = (news) => ({
    type: GET_ALL_NEWS_SUCCESS,
    payload: news,
})

export const getNewsError = (error) => ({
    type: GET_ALL_NEWS_ERROR,
    payload:error,
})

export const getCategoryNewsStart = (slug) => ({
    type: GET_CATEGORY_NEWS_START,
    payload: slug,
})

export const getCategoryNewsSuccess = (news) => ({
    type: GET_CATEGORY_NEWS_SUCCESS,
    payload: news,
})

export const getCategoryNewsError = (error) => ({
    type: GET_CATEGORY_NEWS_ERROR,
    payload:error,
})

