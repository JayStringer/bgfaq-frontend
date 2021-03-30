import Game from '../models/Game'
import { ItemWrapper, StyledBox, TextDiv } from './styles/GameListElementStyles'

type Props = {
  game: Game
  onClick: (gameId: number) => void
}

const GameListElement = (props: Props) => {
  return (
    <ItemWrapper onClick={() => props.onClick(props.game.id)}>
      <StyledBox>
        <p>{props.game.name[0]?.toUpperCase()}</p>
      </StyledBox>
      <TextDiv>
        <h2>{props.game.name}</h2>
      </TextDiv>
    </ItemWrapper>
  )
}

export default GameListElement
