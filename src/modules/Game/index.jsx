import { useParams } from 'react-router-dom'

const Game = () => {
    const { id } = useParams();
    return <h1>Game { id }</h1>
}

export default Game
