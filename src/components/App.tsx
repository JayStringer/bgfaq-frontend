import styled from 'styled-components'

import PageTitle from './PageTitle'
import SearchBar from './SearchBar'
import GameListElement from './GameListElement'

const AppWrapper = styled.div`
  text-align: center;
`

const ListWrapper = styled.div`
  width: 80%;
  max-width: 80rem;

  margin: 0 auto;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const onSearchSubmit = (searchTerm: string) => {
  console.log('Submitted: ', searchTerm)
}

const App = () => (
  <AppWrapper>
    <PageTitle>BGFAQ</PageTitle>
    <SearchBar onSearchSubmit={onSearchSubmit} />

    <ListWrapper>
      <GameListElement text="Agricola" />
      <GameListElement text="Arkham Horror: The Card Game" />
      <GameListElement text="Azul" />
      <GameListElement text="Brass: Birmingham" />
      <GameListElement text="Catan" />
      <GameListElement text="Dixit" />
      <GameListElement text="Everdell" />
      <GameListElement text="Power Grid" />
      <GameListElement text="Spirit Island" />
      <GameListElement text="Ticket to Ride" />
      <GameListElement text="Zombicide" />
    </ListWrapper>
  </AppWrapper>
)

export default App
