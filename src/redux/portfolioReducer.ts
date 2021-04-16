import {InferActionTypes} from "./reduxStore";

const initialState = {
    text: {
        eng: [
            {
                id: 1,
                name: "Business card website",
                description: "This page was made using React, Redux, Typescript and Material UI elements.",
                url: "https://mxtsx.github.io"
            },
            {
                id: 2,
                name: "Social Network",
                description: "Page was made using React, Redux, Typescript, Formik, Axios, WebSocket and Ant Design elements.",
                url: "https://mxtsx.github.io/sample-social-network",
                notes: ["Login: free@samuraijs.com",
                    "Password: free",
                    "In the Safari browser: cookies - enabled; prevent cross-site tracking - disabled."]
            }
        ],
        ukr: [
            {
                id: 1,
                name: "Сайт-візитка",
                description: "Ця сторінка була зроблена з використанням React, Redux, Typescript та елементів Material UI.",
                url: "https://mxtsx.github.io"
            },
            {
                id: 2,
                name: "Соціальна мережа",
                description: "Сторінка була створена з використанням React, Redux, Typescript, Formik, Axios, WebSocket та елементів Ant Design.",
                url: "https://mxtsx.github.io/sample-social-network",
                notes: ["Логін: free@samuraijs.com",
                    "Пароль: free",
                    "У браузері Safari: кукіс - дозволені; не стежити між сайтами - вимкнено."]
            }
        ],
        rus: [
            {
                id: 1,
                name: "Сайт-визитка",
                description: "Этот сайт был сделан с использованием React, Redux, Typescript и элементов Material UI.",
                url: "https://mxtsx.github.io"
            },
            {
                id: 2,
                name: "Социальная сеть",
                description: "Сайт был создан с использованием React, Redux, Typescript, Formik, Axios, WebSocket и элементов Ant Design.",
                url: "https://mxtsx.github.io/sample-social-network",
                notes: ["Логин: free@samuraijs.com",
                    "Пароль: free",
                    "В браузере Safari: кукис - включены; без перекрестного отслеживания - выключено."]
            }
        ],
        cz: [
            {
                id: 1,
                name: "Webová vizitka",
                description: "Tato stránka byla vytvořena s použitím React, Redux, Typescript a elementů Material UI.",
                url: "https://mxtsx.github.io"
            },
            {
                id: 2,
                name: "Sociální síť",
                description: "Stránka byla vytvořena s použitím React, Redux, Typescript, Formik, Axios, WebSocket a elementů Ant Design.",
                url: "https://mxtsx.github.io/sample-social-network",
                notes: ["Přihlašovací jméno: free@samuraijs.com",
                    "Heslo: free",
                    "V prohlížeči Safari: cookies - zapnuto; nasledovat napříč stránkami - vypnuto."]
            }
        ],
        hr: [
            {
                id: 1,
                name: "Poslovna web stranica",
                description: "Ova stranica je stvorena pomoću React, Redux, Typescript i elementa Material UI.",
                url: "https://mxtsx.github.io"
            },
            {
                id: 2,
                name: "Društvena mreža",
                description: "Stranica je stvorena pomoću React, Redux, Typescript, Formik, Axios, WebSocket i elemenata Ant Design.",
                url: "https://mxtsx.github.io/sample-social-network",
                notes: ["Korisničko ime: free@samuraijs.com",
                    "Lozinka: free",
                    "U pregledniku Safari: cookies - uključeno; spriječi praćenje na više mj. - isključeno."]
            }
        ],
    }
}

const portfolioReducer = (state = initialState, action: ActionsType): PortfolioReducerStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const actions = {
    sample: () => ({type: ''} as const)
}

type PortfolioReducerStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>

export default portfolioReducer