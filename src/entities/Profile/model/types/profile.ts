import { Country, Currency } from "shared/const/common";

export interface Profile {
    firstname: string;
    lastname: string;
    age: 31,
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileScheme {
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean
}