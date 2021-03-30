import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'

const HomePageWrapper = styled.div`
  width: 100%;

  h2 {
    text-align: center;
    font-family: 'mont';
    font-weight: 400;
    font-size: 2rem;
  }
`

const HomePage = () => {
  const navigate = useNavigate()

  const onSearchSubmit = (searchTerm: string) => {
    navigate(`/search?searchTerm=${searchTerm}`)
  }

  return (
    <HomePageWrapper>
      <SearchBar onSearchSubmit={onSearchSubmit} />

      <h2>Use the search bar above to search for games</h2>
    </HomePageWrapper>
  )
}

export default HomePage
