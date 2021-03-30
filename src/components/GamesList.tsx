import { useNavigate } from 'react-router-dom'

import { ListWrapper } from './styles/GamesListStyles'
import GameListElement from './GameListElement'
import Game from '../models/Game'

type Props = {
  games: Game[]
}

const GamesList = (props: Props) => {
  const navigate = useNavigate()

  const onGameClick = (gameId: number) => {
    navigate(`/game/${gameId}`)
  }

  return (
    <ListWrapper>
      {props.games.map((game: Game) => {
        return (
          <GameListElement key={game.id} game={game} onClick={onGameClick} />
        )
      })}
    </ListWrapper>
  )
}

export default GamesList
