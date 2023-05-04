import { StateScheme } from "@/app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"


describe('getLoginisLoading.test', () => {
    test('return username', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: 'admon'
            }
        }
        expect(getLoginUsername(state as StateScheme)).toEqual('admon')
    })

    test('work with empty state', () => {
        const state: DeepPartial<StateScheme> = {}
        expect(getLoginUsername(state as StateScheme)).toEqual('')
    })
})