import {InferActionTypes} from "./reduxStore";

const CHANGE_LANGUAGE = "lang/CHANGE_LANGUAGE"

const initialState = {
    language: "eng" as LanguageType
}

const languageReducer = (state = initialState, action: ActionsType): LanguageReducerStateType => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload.language
            }
        default:
            return state
    }
}

export const actions = {
    languageChanged: (language: LanguageType) => ({type: CHANGE_LANGUAGE, payload: {language}} as const)
}

type LanguageReducerStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
export type LanguageType = "eng" | "ukr" | "rus" | "cz" | "hr"

export default languageReducer