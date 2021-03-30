import styled from 'styled-components'

export const ItemWrapper = styled.div`
  display: flex;
  height: 9.5rem;

  border-style: solid none none none;
  border-width: 5px;
  border-color: black;

  cursor: pointer;
`

export const TextDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: black;
    transition: background-color 0.2s;

    h2 {
      transition: color 0.2s;
      color: white;
    }
  }

  h2 {
    transition: color 0.2s;
    font-family: 'mont';
    font-weight: 700;
    font-size: 3rem;

    @media (max-width: 600px) {
      font-size: 5vw;
    }
  }
`

export const StyledBox = styled.div`
  width: 10rem;
  height: 9.5rem;
  min-width: 10rem;
  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  p {
    color: white;
    font-family: 'mont';
    font-weight: 700;
    font-size: 7.5rem;
    margin: 0;
  }
`
