import {combineReducers, createStore} from "redux";
import aboutReducer from "./aboutReducer";
import contactReducer from "./contactReducer";
import homepageReducer from "./homepageReducer";
import portfolioReducer from "./portfolioReducer";
import headerReducer from "./headerReducer";
import languageReducer from "./languageReducer";
import errorReducer from "./errorReducer";

const reducers = combineReducers({
    about: aboutReducer,
    contact: contactReducer,
    home: homepageReducer,
    portfolio: portfolioReducer,
    header: headerReducer,
    lang: languageReducer,
    errorReducer: errorReducer
})

const store = createStore(reducers)

type RootReducer = typeof reducers
export type AppStateType = ReturnType<RootReducer>
export type InferActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export default store