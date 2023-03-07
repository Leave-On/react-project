import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileScheme } from '../types/profile'


const initialState: ProfileScheme = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
}

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})

export const { actions: profileActions } = ProfileSlice
export const { reducer: profileReducer } = ProfileSlice