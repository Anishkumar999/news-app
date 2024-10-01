import { takeLatest , put } from "redux-saga/effects";
import { getCategoryNewsError, getCategoryNewsSuccess, getNewsError, getNewsSuccess } from "../action/news.action";
import { GET_ALL_NEWS_START, GET_CATEGORY_NEWS_START } from "../constant/news.constant";
import { getNewsFromApi } from "../service/news.service";

function* getNews(){
    try{
        let result = yield getNewsFromApi();
        yield put (getNewsSuccess(result));
    }catch (error){
        yield put(getNewsError(error.message))
    }
}

function* getCategoryNews({payload}){
    try{
        let result = yield getNewsFromApi(payload);
        yield put (getCategoryNewsSuccess(result));
    }catch (error){
        yield put(getCategoryNewsError(error.message))
    }
}

export default function* news(){
    yield takeLatest(GET_ALL_NEWS_START, getNews)
    yield takeLatest(GET_CATEGORY_NEWS_START, getCategoryNews)


}