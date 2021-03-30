import styled from 'styled-components'

import { Link } from 'react-router-dom'

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'lemon-milk';
    font-weight: 700;
    font-size: 3;
  }

  a {
    text-underline-offset: 7px;
    color: black;
  }

  body {
    font-family: 'mont';
    font-weight: 400;
    font-size: 2rem;
  }
`

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <h1>Page Not Found</h1>
      <Link to="/">
        <body>Return to Home</body>
      </Link>
    </NotFoundWrapper>
  )
}

export default NotFoundPage
