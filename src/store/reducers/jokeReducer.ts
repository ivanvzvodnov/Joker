import { JokeAction, JokeActionTypes, JokeState } from "../../types/joke";

const initialState: JokeState = {
    joke: 'Want a joke?)',
    error: null,
    loading: false,
}

export const jokeReducer = (state = initialState, action: JokeAction):JokeState => {
    switch (action.type) {
        case JokeActionTypes.FETCH_JOKE:
            return{ 
                joke: '',
                error: null,
                loading: true,
            }
        case JokeActionTypes.FETCH_JOKE_SUCCESS:
            return{ 
                joke: action.payload,
                error: null,
                loading: false,
            }
        case JokeActionTypes.FETCH_JOKE_ERROR:
            return{ 
                joke: '',
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}