import {InferActionTypes} from "./reduxStore";
import github from "../github.svg"
import linkedin from "../linkedin-round.svg"
import email from "../email-round.svg"

const initialState = {
    text: [
        {
            image: github,
            url: "https://github.com/mxtsx",
            name: "Github",
            id: 1
        },
        {
            image: linkedin,
            url: "https://www.linkedin.com/in/mxtsx/",
            name: "LinkedIn",
            id: 2
        },
        {
            image: email,
            url: "mailto: mxdottsx@gmail.com",
            name: "mxdottsx@gmail.com",
            id: 3
        }
    ]
}

const contactReducer = (state = initialState, action: ActionsType): ContactReducerStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const actions = {
    sample: () => ({type: ''} as const)
}

type ContactReducerStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>

export default contactReducer