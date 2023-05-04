import { StateScheme } from "@/app/providers/StoreProvider"
import { getProfileIsLoading } from "./getProfileIsLoading"

describe('getProfileIsLoading', () => {
    test('get isLoading', () => {

        const state: DeepPartial<StateScheme> = {
            profile: {
                isLoading: true
            }
        }

        expect(getProfileIsLoading(state as StateScheme)).toEqual(true)

    })

    test('empty state', () => {

        const state: DeepPartial<StateScheme> = {}

        expect(getProfileIsLoading(state as StateScheme)).toEqual(undefined)

    })
})