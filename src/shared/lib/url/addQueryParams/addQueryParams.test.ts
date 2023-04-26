
import { getQueryParams } from "./addQueryParams"

describe ('addQueryParams', function()  {
    test('one param', () => {
        const params = getQueryParams({
            test: 'value'
        })
        expect(params).toBe('?test=value')
    })
    test('multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            test2: 'value2'
        })
        expect(params).toBe('?test=value&test2=value2')
    })

    test('undefined', () => {
        const params = getQueryParams({
            test: 'value',
            test2: undefined
        })
        expect(params).toBe('?test=value')
    })
})