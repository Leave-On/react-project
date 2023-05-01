import { Profile } from "../../../../entities/Profile/model/types/profile";

export enum ValidateProfileError {
    INCORRECT_DATA = 'Incorrect user data',
    INCORRECT_AGE = 'Incorrect age',
    INCORRECT_COUNTRY = 'Incorrect country',
    NO_DATA = 'No data',
    SERVER_ERROR = 'Server error'
}

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
