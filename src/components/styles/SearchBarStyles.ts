import styled from 'styled-components'

export const SearchRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  
  height: 5rem;
`

export const StyledSearchBar = styled.input`
  width: 100%;
  height: 100%;

  border-radius: 0rem;
  background-color: black;
  border: 0;
  outline: 0;

  color: white;
  font-family: 'mont';
  font-weight: 400;
  font-size: 2.72rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0rem;
  padding-bottom: 0rem;

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

export const SearchSubmitButton = styled.input`
  min-width: 5rem;
  height: 100%;

  cursor: pointer;

  font-family: 'lemon-milk';
  font-size: 2.72rem;

  font-weight: 400;
  color: white;

  background-color: black;
  border-color: black;
  border-radius: 0rem;
  border: 0;
  outline: 0;
  border-style: none;

`