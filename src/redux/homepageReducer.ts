import {InferActionTypes} from "./reduxStore";

const initialState = {
    text: {
        eng: {
            greeting: "Hi, my name is Max.",
            description: "I am a Junior React Developer. Welcome to my page."
        },
        ukr: {
            greeting: "Привіт, я Макс.",
            description: "Я починаючий React Developer. Вітаю на моїй сторінці."
        },
        rus: {
            greeting: "Привет, меня зовут Макс.",
            description: "Я начинающий React Developer. Добро пожаловать на мою страницу."
        },
        cz: {
            greeting: "Ahoj, jsem Max.",
            description: "Jsem Junior React Developer. Vítejte na mojí stránce."
        },
        hr: {
            greeting: "Bok, ja sam Max.",
            description: "Sam Junior React Developer. Dobro došli na moju stranicu."
        }
    }
}

const homepageReducer = (state = initialState, action: ActionsType): HomePageReducerStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const actions = {
    sample: () => ({type: ''} as const)
}

type HomePageReducerStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>

export default homepageReducer