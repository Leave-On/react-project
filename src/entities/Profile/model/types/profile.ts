import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

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