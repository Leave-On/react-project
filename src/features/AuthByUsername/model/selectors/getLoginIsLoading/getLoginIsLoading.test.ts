import { StateScheme } from "app/providers/StoreProvider"
import { getLoginIsLoading } from "./getLoginIsLoading"


describe('getLoginisLoading.test', () => {
    test('return true', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateScheme)).toEqual(true)
    })

    test('work with empty state', () => {
        const state: DeepPartial<StateScheme> = {}
        expect(getLoginIsLoading(state as StateScheme)).toEqual(false)
    })
})