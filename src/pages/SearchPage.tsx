import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { useSearchForGames } from '../apis/backend'
import GamesList from '../components/GamesList'
import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'

const SearchPageWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  text-align: center;
`

const NoGamesText = styled.h1`
  font-family: 'mont';
  font-weight: 700;
  font-size: 3rem;
`

const ErrorText = styled.h1`
  font-family: 'mont';
  font-weight: 700;
  font-size: 3rem;
  color: red;
`

const NoGames = () => {
  return <NoGamesText>No Games Found</NoGamesText>
}

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    searchTerm: '',
  })

  const onSearchSubmit = async (searchTerm: string) => {
    setSearchParams({ searchTerm: searchTerm })
  }

  const searchStatus = useSearchForGames(searchParams.get('searchTerm') ?? '')

  return (
    <SearchPageWrapper>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      {
        // prettier-ignore
        (searchStatus.isBusy() && <Loading />)
        || (searchStatus.type === 'Success' && <GamesList games={searchStatus.output} /> )
        || (searchStatus.type === 'Failed' && searchStatus.error.message === '404' && <NoGames />)
        || (searchStatus.type === 'Failed' && <ErrorText>Error</ErrorText>)
      }
    </SearchPageWrapper>
  )
}

export default SearchPage
