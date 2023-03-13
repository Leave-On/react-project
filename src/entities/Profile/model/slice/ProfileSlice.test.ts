import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { updateProfileData } from "../services/updateProfileData/updateProfileData"
import { ProfileScheme, ValidateProfileError } from "../types/profile"
import { profileActions, profileReducer } from "./ProfileSlice"


const data = {
    firstname: 'Yuri',
    lastname: 'Tarded',
    age: 100,
    country: Country.Belarus,
    currency: Currency.USD,
    city: 'Meinhem',
    username: 'PussySlayer228'
}

describe('ProfileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false }
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true })
    })

    test('cancel edit', () => {
        const state: DeepPartial<ProfileScheme> = {
            data,
            form: { username: '' }
        }
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.cancelEdit()
        )).toEqual({
            ...state,
            readonly: true,
            validateErrors: [],
            form: data,
            data
        })
    })
    test('updateProfile', () => {
        const state: DeepPartial<ProfileScheme> = { form: { username: '1323' } }

        expect(profileReducer(
            state as ProfileScheme,
            profileActions.updateProfile({ username: 'asd' })
        )).toEqual({ form: { username: 'asd' } })
    })

    test('updateProfile service penfing', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        }

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })
    test('updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: true,
        }

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data
        })
    })

})