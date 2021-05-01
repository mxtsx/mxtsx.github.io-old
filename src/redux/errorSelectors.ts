import {AppStateType} from "./reduxStore";

export const getError404 = (state: AppStateType) => {
    return state.errorReducer.error404
}

export const getError = (state: AppStateType) => {
    return state.errorReducer.error
}