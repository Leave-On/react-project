import { ThunkConfig } from "@/app/providers/StoreProvider";
import { User, userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
> (
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi
        try {
            const response = await extra.api.post<User>('/login', authData)
            if (!response.data) {
                throw new Error()
            }
            dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue('error')

        }

    }
)