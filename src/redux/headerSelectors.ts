import {AppStateType} from "./reduxStore";

export const getHeaderText = (state: AppStateType) => {
    return state.header.navbarText
}

export const getLabelText = (state: AppStateType) => {
    return state.header.selectLabel
}

export const getCurrentPageTitle = (state: AppStateType) => {
    return state.header.currentPage
}