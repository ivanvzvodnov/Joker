import axios from "axios"
import { Dispatch } from "react"
import { JokeAction, JokeActionTypes } from "../../types/joke"

export const fetchJoke = () => {
    return async(dispatch:Dispatch<JokeAction>) => {
        try {
            dispatch({type: JokeActionTypes.FETCH_JOKE})
            const response = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json'
                }
            })
            setTimeout(() => dispatch({type: JokeActionTypes.FETCH_JOKE_SUCCESS, payload: response.data.joke}), 700)
        } catch (error) {
            dispatch({type: JokeActionTypes.FETCH_JOKE_ERROR, payload: 'Can`t remember a joke :('})
        }
    }
}