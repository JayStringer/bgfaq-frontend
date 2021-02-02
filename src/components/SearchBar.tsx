import { useState } from 'react'

import styled from 'styled-components'

const StyledSearchBar = styled.input`
  width: 79%;
  max-width: 80rem;
  min-width: 280px;

  height: 4rem;
  border-radius: 3.2rem;
  background-color: black;
  border: 0;
  outline: 0;

  color: white;
  font-family: 'mont';
  font-weight: 400;
  font-size: 2.72rem;
  padding-left: 1.6rem;
  padding-top: 0.32rem;

  &:focus {
    box-shadow: 0 0 1pt 1pt white;

    ::placeholder {
      color: transparent;
    }
  }

  &::selection {
    background: white;
    color: black;
  }

  &::placeholder {
    color: white;
  }
`

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
      <StyledSearchBar
        value={searchValue}
        spellCheck={false}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        aria-label="search box"
      ></StyledSearchBar>
    </form>
  )
}

export default SearchBar
