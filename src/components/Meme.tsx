import { FC } from 'react'
import { useActions } from '../hooks/useActions'
import { Button, Container, Joke } from './Meme.style'

interface MemeProps{
    data: string,
}

export const Meme:FC<MemeProps> = ({data}): JSX.Element => {

    const {fetchJoke} = useActions()

    return(
        <Container>
            <Joke>
                {data}
            </Joke>
            <Button onClick={() => fetchJoke()}>
            GET A JOKE
            </Button>
        </Container>
    )
}