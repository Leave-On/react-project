import { LoginScheme } from "../types/LoginScheme"
import { loginActions, loginReducer } from "./loginSlice"

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginScheme> = { username: '123' }
        expect(loginReducer(state as LoginScheme, loginActions.setUsername('12341'))).toEqual({ username: '12341' })
    })
    test('set password', () => {
        const state: DeepPartial<LoginScheme> = { password: '123' }
        expect(loginReducer(state as LoginScheme, loginActions.setPassword('12341'))).toEqual({ password: '12341' })
    })
})