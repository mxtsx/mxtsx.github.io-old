import {AppStateType} from "./reduxStore";

export const getContactText = (state: AppStateType) => {
    return state.contact.text
}