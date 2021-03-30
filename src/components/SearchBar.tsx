import { useState } from 'react'
import {
  SearchRowWrapper,
  StyledSearchBar,
  SearchSubmitButton,
} from './styles/SearchBarStyles'

type Props = {
  onSearchSubmit: (searchTerm: string) => void
}

const SearchBar = (props: Props) => {
  const [searchValue, setSearchValue] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSearchSubmit(searchValue)
  }

  return (
    <form onSubmit={onSubmit}>
      <SearchRowWrapper>
        <StyledSearchBar
          type="input"
          value={searchValue}
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          aria-label="search box"
          data-cy="search-box"
        ></StyledSearchBar>
        <SearchSubmitButton type="submit" value=">" />
      </SearchRowWrapper>
    </form>
  )
}

export default SearchBar
