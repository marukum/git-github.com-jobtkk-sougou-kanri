import * as React from 'react'
import {Counter} from './Counter'
import {useDispatch, useSelector} from 'react-redux'
import {
  CounterActions,
  CounterState,
  decrementAmount,
  fetchRequestFinish,
  fetchRequestStart,
  incrementAmount
} from './module'
import {Dispatch} from 'redux'
import {ReduxState} from '../Store/store'
import {RouteComponentProps} from 'react-router'

export class ActionDispatcher {
  constructor(private dispatch: Dispatch<CounterActions>) {}

  myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })

  public increment(amount: number): void {
    this.dispatch(incrementAmount(amount))
  }

  public decrement(amount: number): void {
    this.dispatch(decrementAmount(amount))
  }

  public async asyncIncrement(): Promise<void> {
    this.dispatch(fetchRequestStart())

    try {
      const response: Response = await fetch('/api/count', {
        method: 'GET',
        headers: this.myHeaders
      })

      if (response.status !== 200) {
        throw new Error(`illegal status code: ${response.status}`)
      }
      const json: { amount: number } = await response.json()
      this.dispatch(incrementAmount(json.amount))
    } catch (err) {
      console.error(err)
    } finally {
      this.dispatch(fetchRequestFinish())
    }
  }
}

type RouterProps = RouteComponentProps<{myParams: string | undefined}>

export default function CounterContainer(props: RouterProps) {
  const count = useSelector<ReduxState, CounterState>((state) => {
    return state.counter
  })
  return (
      <Counter
          value={count}
          actions={new ActionDispatcher(useDispatch())}
          param={props.match.params.myParams}
      />
  )
}