export interface JokeState{
    joke: string,
    loading: boolean,
    error: null | string,
}

export enum JokeActionTypes{
    FETCH_JOKE = 'FETCH_JOKE',
    FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS',
    FETCH_JOKE_ERROR = 'FETCH_JOKE_ERROR',
}

interface FetchJokeAction{
    type: JokeActionTypes.FETCH_JOKE;
}

interface FetchJokeSuccessAction{
    type: JokeActionTypes.FETCH_JOKE_SUCCESS;
    payload: string;
}

interface FetchJokeErrorAction{
    type: JokeActionTypes.FETCH_JOKE_ERROR;
    payload: string;
}

export type JokeAction = FetchJokeAction | FetchJokeSuccessAction | FetchJokeErrorAction