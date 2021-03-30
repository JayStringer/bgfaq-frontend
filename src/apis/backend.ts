import ky from 'ky'
import Game from '../models/Game'
import FAQ from '../models/FAQ'
import { useEffect, useState } from 'react'
import { AsyncCallStatus, Status, toStatusOps } from '../models/APITypes'

const api = ky.create({
  prefixUrl: 'http://localhost:8080',
})

const searchForGames = (
  searchTerm: string,
  signal: AbortSignal
): Promise<Game[]> =>
  api
    .get('search', {
      searchParams: { searchTerm: searchTerm },
      signal: signal,
    })
    .json()

const getGameFAQ = (id: string, signal: AbortSignal): Promise<FAQ[]> =>
  api.get('game', { searchParams: { id: id }, signal: signal }).json()

type BackendRequest<I, O> = (input: I, signal: AbortSignal) => Promise<O>

const useBackend = <I, O>(apiCall: BackendRequest<I, O>, input: I) => {
  const [requestStatus, setRequestStatus] = useState<Status<O>>({
    type: 'Pending',
  })

  useEffect(() => {
    const controller = new AbortController()

    setRequestStatus({ type: 'Busy' })
    apiCall(input, controller.signal)
      .then((output: O) =>
        setRequestStatus({ type: 'Success', output: output })
      )
      .catch(
        (e: Error) =>
          !controller.signal.aborted &&
          setRequestStatus({ type: 'Failed', error: e })
      )

    return () => {
      controller.abort()
    }
  }, [input, apiCall])

  return { ...requestStatus, ...toStatusOps(requestStatus) }
}

export const useSearchForGames = (
  searchTerm: string
): AsyncCallStatus<Game[]> => useBackend(searchForGames, searchTerm)

export const useGameFAQ = (id: string): AsyncCallStatus<FAQ[]> =>
  useBackend(getGameFAQ, id)
