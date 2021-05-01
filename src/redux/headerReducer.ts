import {InferActionTypes} from "./reduxStore";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
    navbarText: [
        {
            title: {
                eng: "Home",
                ukr: "Головна сторінка",
                rus: "Главная страница",
                cz: "Domů",
                hr: "Početna stranica"
            },
            path: "/",
            id: 1
        },
        {
            title: {
                eng: "About",
                ukr: "Про мене",
                rus: "Обо мне",
                cz: "O mně",
                hr: "O meni"
            },
            path: "/about",
            id: 2
        },
        {
            title: {
                eng: "Portfolio",
                ukr: "Портфоліо",
                rus: "Портфолио",
                cz: "Portfolio",
                hr: "Portfolio"
            },
            path: "/portfolio",
            id: 3
        },
        {
            title: {
                eng: "Contact",
                ukr: "Контакти",
                rus: "Контакты",
                cz: "Kontakty",
                hr: "Kontakt"
            },
            path: "/contacts",
            id: 4
        }
    ],
    selectLabel: {
        eng: "Lang",
        ukr: "Мова",
        rus: "Язык",
        cz: "Jazyk",
        hr: "Jezik"
    },
    currentPage: null as null | string
}

const headerReducer = (state = initialState, action: ActionsType): HeaderReducerStateType => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        default:
            return state
    }
}

export const actions = {
    setCurrentPage: (currentPage: string | null) => ({type: SET_CURRENT_PAGE, payload: {currentPage}} as const)
}

type HeaderReducerStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>

export default headerReducer