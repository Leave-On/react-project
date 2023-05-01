import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk"
import { fetchProfileData } from "./fetchProfileData"


const data = {
    firstname: 'Yuri',
    lastname: 'Tarded',
    age: 100,
    country: Country.Belarus,
    currency: Currency.USD,
    city: 'Meinhem',
    username: 'PussySlayer228'
}

describe('fetchProfileData', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')
        expect(result.meta.requestStatus).toBe('rejected')
    })
})