import {AppStateType} from "./reduxStore";

export const getPortfolioText = (state: AppStateType) => {
    return state.portfolio.text
}