import { StateScheme } from "app/providers/StoreProvider"
import { CounterScheme } from "../types/counterScheme"
import { counterActions, counterReduser } from "./counterSlice"

describe('counterSlice.test', () => {
  test('increment', () => {
    const state: CounterScheme = { value: 10 }
    
    expect(
      counterReduser(state, counterActions.increment())
      )
      .toEqual({ value: 11 })
    })

    test('decrement', () => {
      const state: CounterScheme = { value: 10 }
      
      expect(
        counterReduser(state, counterActions.decrement())
        )
        .toEqual({ value: 9 })
      })

      test('should work with empty state', () => {

        expect(
          counterReduser(undefined, counterActions.decrement())
          )
          .toEqual({ value: -1 })
        })
})