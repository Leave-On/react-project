import { screen } from "@testing-library/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { Profile } from "entities/Profile";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { profileReducer } from "../../model/slice/ProfileSlice";

import userEvent from "@testing-library/user-event";
import { $api } from "shared/api/api";
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: '123',
    age: 123,
    currency: Currency.EUR,
    country: Country.Armenia,
    city: 'Rostov',
    username: 'kucha'
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: { authData: { id: '1' } }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('features/EditableFrofileCard',  () => {
    test('Toggle readonly mode', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument()
    })

    test('Cancel changes resets profile data', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstnameInput'))
        await userEvent.clear(screen.getByTestId('ProfileCard.LastnameInput'))

        await userEvent.type(screen.getByTestId('ProfileCard.FirstnameInput'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.LastnameInput'), 'user')

        expect(screen.getByTestId('ProfileCard.FirstnameInput')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.LastnameInput')).toHaveValue('user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'))

        expect(screen.getByTestId('ProfileCard.FirstnameInput')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.LastnameInput')).toHaveValue('123')
    })

    test('Show error', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstnameInput'))

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))

        expect(screen.getByTestId('EditableFrofileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('Send PUT request if there is no Error', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        const mockPutReq = jest.spyOn($api, 'put')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))
        await userEvent.type(screen.getByTestId('ProfileCard.FirstnameInput'), 'user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))

        expect(mockPutReq).toHaveBeenCalled()
    })

})