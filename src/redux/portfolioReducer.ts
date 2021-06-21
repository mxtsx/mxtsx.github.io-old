import {InferActionTypes} from "./reduxStore";

const initialState = {
    text: {
        eng: [
            {
                id: 1,
                name: "Business card website",
                description: "This page was made using React, Redux, Typescript and Material UI elements.",
                url: "https://mxtsx.github.io",
                codeUrl: 'https://github.com/mxtsx/mxtsx.github.io',
            },
            {
                id: 2,
                name: "Social Network",
                description: "Page was made using React, Redux, Typescript, Formik, Axios, WebSocket and Ant Design elements.",
                url: "https://mxtsx.github.io/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/sample-social-network',
                notes: ["Login: free@samuraijs.com",
                    "Password: free",
                    "In the Safari browser: cookies - enabled; prevent cross-site tracking - disabled."]
            },
            {
                id: 3,
                name: "Social Network: Mobile App",
                description: "React Native App made using Expo, Redux, React Navigation v.5, Axios and React Native Async Storage.",
                url: "https://expo.io/@mxtsx/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/rn-sample-social-network-app',
                downloadUrl: "/favicon.ico",
                notes: ["Login: sn_guest_account@protonmail.com",
                    "Password: Guest_Free_12345",
                    "You can run this application on Android and iOS using Expo App, or only on Android after downloading an .apk file."]
            }
        ],
        ukr: [
            {
                id: 1,
                name: "Сайт-візитка",
                description: "Ця сторінка була зроблена з використанням React, Redux, Typescript та елементів Material UI.",
                url: "https://mxtsx.github.io",
                codeUrl: 'https://github.com/mxtsx/mxtsx.github.io',
            },
            {
                id: 2,
                name: "Соціальна мережа",
                description: "Сторінка була створена з використанням React, Redux, Typescript, Formik, Axios, WebSocket та елементів Ant Design.",
                url: "https://mxtsx.github.io/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/sample-social-network',
                notes: ["Логін: free@samuraijs.com",
                    "Пароль: free",
                    "У браузері Safari: кукіс - дозволені; не стежити між сайтами - вимкнено."]
            },
            {
                id: 3,
                name: "Соціальна мережа: Мобільний додаток",
                description: "Додаток був створений за допомогою Expo, Redux, React Navigation v.5, Axios та React Native Async Storage.",
                url: "https://expo.io/@mxtsx/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/rn-sample-social-network-app',
                downloadUrl: "/favicon.ico",
                notes: ["Логін: sn_guest_account@protonmail.com",
                    "Пароль: Guest_Free_12345",
                    "Ви можете запустити даний додаток на Андроїді та iOS за допомогою додатку Expo, або ж завантаживши apk файл (лише для Андроїду)."
                ]
            }
        ],
        rus: [
            {
                id: 1,
                name: "Сайт-визитка",
                description: "Этот сайт был сделан с использованием React, Redux, Typescript и элементов Material UI.",
                url: "https://mxtsx.github.io",
                codeUrl: 'https://github.com/mxtsx/mxtsx.github.io',
            },
            {
                id: 2,
                name: "Социальная сеть",
                description: "Сайт был создан с использованием React, Redux, Typescript, Formik, Axios, WebSocket и элементов Ant Design.",
                url: "https://mxtsx.github.io/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/sample-social-network',
                notes: ["Логин: free@samuraijs.com",
                    "Пароль: free",
                    "В браузере Safari: кукис - включены; без перекрестного отслеживания - выключено."]
            },
            {
                id: 3,
                name: "Социальная сеть: мобильное приложение",
                description: "Приложение было создано с использованием Expo, Redux, React Navigation v.5, Axios и React Native Async Storage.",
                url: "https://expo.io/@mxtsx/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/rn-sample-social-network-app',
                downloadUrl: "/favicon.ico",
                notes: ["Логин: sn_guest_account@protonmail.com",
                    "Пароль: Guest_Free_12345",
                    "Вы можете запустить это приложение на Андроиде и iOS с помощью Expo App, либо загрузить .apk файл (только для Андроида)."
                ]
            }
        ],
        cz: [
            {
                id: 1,
                name: "Webová vizitka",
                description: "Tato stránka byla vytvořena s použitím React, Redux, Typescript a elementů Material UI.",
                url: "https://mxtsx.github.io",
                codeUrl: 'https://github.com/mxtsx/mxtsx.github.io',
            },
            {
                id: 2,
                name: "Sociální síť",
                description: "Stránka byla vytvořena s použitím React, Redux, Typescript, Formik, Axios, WebSocket a elementů Ant Design.",
                url: "https://mxtsx.github.io/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/sample-social-network',
                notes: ["Přihlašovací jméno: free@samuraijs.com",
                    "Heslo: free",
                    "V prohlížeči Safari: cookies - zapnuto; nasledovat napříč stránkami - vypnuto."]
            },
            {
                id: 3,
                name: "Sociální síť: mobilní aplikace",
                description: "Aplikace byla vytvořena s použitím Expo, Redux, React Navigation v.5, Axios a React Native Async Storage.",
                url: "https://expo.io/@mxtsx/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/rn-sample-social-network-app',
                downloadUrl: "/favicon.ico",
                notes: ["Přihlašovací jméno: sn_guest_account@protonmail.com",
                    "Heslo: Guest_Free_12345",
                    "Aplikaci můžete spustit na Androidu a iOS pomocí Expo App, nebo pouze na Androidu po stažení .apk souboru."]
            }
        ],
        hr: [
            {
                id: 1,
                name: "Poslovna web stranica",
                description: "Ova stranica je stvorena pomoću React, Redux, Typescript i elementa Material UI.",
                url: "https://mxtsx.github.io",
                codeUrl: 'https://github.com/mxtsx/mxtsx.github.io',
            },
            {
                id: 2,
                name: "Društvena mreža",
                description: "Stranica je stvorena pomoću React, Redux, Typescript, Formik, Axios, WebSocket i elemenata Ant Design.",
                url: "https://mxtsx.github.io/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/sample-social-network',
                notes: ["Korisničko ime: free@samuraijs.com",
                    "Lozinka: free",
                    "U pregledniku Safari: cookies - uključeno; spriječi praćenje na više mj. - isključeno."]
            },
            {
                id: 3,
                name: "Društvena mreža: mobilna aplikacija",
                description: "Aplikacija je stvorena pomoću Expo, Redux, React Navigation v.5, Axios i React Native Async Storage.",
                url: "https://expo.io/@mxtsx/sample-social-network",
                codeUrl: 'https://github.com/mxtsx/rn-sample-social-network-app',
                downloadUrl: "/favicon.ico",
                notes: ["Korisničko ime: sn_guest_account@protonmail.com",
                    "Lozinka: Guest_Free_12345",
                    "Aplikaciju možete pokrenuti na Androidu i iOS pomoću aplikacije Expo ili samo na Androidu nakon preuzimanja .apk datoteke."]
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