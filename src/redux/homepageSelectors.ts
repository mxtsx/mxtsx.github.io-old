import {AppStateType} from "./reduxStore";

export const getHomePageText = (state: AppStateType) => {
    return state.home.text
}