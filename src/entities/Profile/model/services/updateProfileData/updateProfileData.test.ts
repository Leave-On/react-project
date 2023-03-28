import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk"
import { ValidateProfileError } from "../../types/profile"
import { updateProfileData } from "./updateProfileData"


const data = {
    firstname: 'Yuri',
    lastname: 'Tarded',
    age: 100,
    country: Country.Belarus,
    currency: Currency.USD,
    city: 'Meinhem',
    username: 'PussySlayer228',
    id: '1'
}

describe('updateProfileData.test', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ])
    })

    test('validation error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '', age: undefined, country: undefined }
            }
        });

        const result = await thunk.callThunk()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ])
    })
})