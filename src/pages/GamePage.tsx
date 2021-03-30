import { useParams } from 'react-router-dom'
import { useGameFAQ } from '../apis/backend'

import Loading from '../components/Loading'

const GamePage = () => {
  const { id } = useParams()

  const gameFAQStatus = useGameFAQ(id)

  return (
    <div>
      <h1>Game Page {id}</h1>
      {gameFAQStatus.isBusy() && <Loading />}
    </div>
  )
}

export default GamePage
