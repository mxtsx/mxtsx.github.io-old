import {AppStateType} from "./reduxStore";

export const getAboutText = (state: AppStateType) => {
    return state.about.text
}