import {InferActionTypes} from "./reduxStore";

const initialState = {
    error404: {
        eng: "Page doesn't exist",
        ukr: "Сторінки не існує",
        rus: "Страница не существует",
        cz: "Stránka neexistuje",
        hr: "Stranica ne postoji"
    },
    error: {
        eng: "Error",
        ukr: "Помилка",
        rus: "Ошибка",
        cz: "Chyba",
        hr: "Greška"
    }
}

const errorReducer = (state = initialState, action: ActionsType): ErrorReducerStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const actions = {
    sample: () => ({type: ''} as const)
}

type ErrorReducerStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>

export default errorReducer