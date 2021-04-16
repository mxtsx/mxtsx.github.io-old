import {AppStateType} from "./reduxStore";

export const getLanguage = (state: AppStateType) => {
    return state.lang.language
}