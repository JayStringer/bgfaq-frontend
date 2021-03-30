type Option<T> = T | undefined

type Pending = { type: 'Pending' }
type Busy = { type: 'Busy' }
type Success<O> = { type: 'Success'; output: O }
type Failed = { type: 'Failed'; error: Error }

type ProgressStatus = Pending | Busy
type TerminalStatus<O> = Success<O> | Failed
export type Status<O> = ProgressStatus | TerminalStatus<O>

type StatusOps<O> = {
  isPending: () => boolean
  isBusy: () => boolean
  isComplete: () => boolean
  isSuccess: () => boolean
  isFailed: () => boolean
  resultOption: () => Option<O>
}

export const toStatusOps = <O>(status: Status<O>): StatusOps<O> => {
  return {
    isPending: () => status.type === 'Pending',
    isBusy: () => status.type === 'Busy',
    isComplete: () => status.type === 'Success' || status.type === 'Failed',
    isSuccess: () => status.type === 'Success',
    isFailed: () => status.type === 'Failed',
    resultOption: () => (status.type === 'Success' ? status.output : undefined),
  }
}

export type AsyncCallStatus<O> = Status<O> & StatusOps<O>
