import { StateScheme } from "app/providers/StoreProvider"
import { getLoginPassword } from "./getLoginPassword"


describe('getLoginisLoading.test', () => {
    test('return password', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '123'
            }
        }
        expect(getLoginPassword(state as StateScheme)).toEqual('123')
    })

    test('work with empty state', () => {
        const state: DeepPartial<StateScheme> = {}
        expect(getLoginPassword(state as StateScheme)).toEqual('')
    })
})