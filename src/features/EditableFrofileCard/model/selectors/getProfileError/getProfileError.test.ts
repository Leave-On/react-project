import { StateScheme } from "@/app/providers/StoreProvider"
import { getProfileError } from "./getProfileError"

describe('getProfileError', () => {
    test('get error', () => {

        const state: DeepPartial<StateScheme> = {
            profile: {
                error: 'error'
            }
        }

        expect(getProfileError(state as StateScheme)).toEqual('error')

    })

    test('empty state', () => {

        const state: DeepPartial<StateScheme> = {}

        expect(getProfileError(state as StateScheme)).toEqual(undefined)

    })
})