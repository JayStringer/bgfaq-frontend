import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageTitleH1 = styled.h1`
  font-family: 'lemon-milk';
  font-weight: 900;
  font-size: 6.4rem;
  color: black;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const PageTitle = () => {
  return (
    <StyledLink to="/">
      <PageTitleH1>BGFAQ</PageTitleH1>
    </StyledLink>
  )
}

export default PageTitle
