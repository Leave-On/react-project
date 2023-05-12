import { StateScheme } from "@/app/providers/StoreProvider"
import { ValidateProfileError } from "../../consts/consts"
import { getProfileValidateErrors } from "./getProfileValidateErrors"

describe('getProfileValidateErrors', () => {
    test('get isLoading', () => {

        const state: DeepPartial<StateScheme> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORRECT_AGE]
            }
        }

        expect(getProfileValidateErrors(state as StateScheme)).toEqual([ValidateProfileError.INCORRECT_AGE])

    })

    test('empty state', () => {

        const state: DeepPartial<StateScheme> = {}

        expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined)

    })
})