export const updateProfile = (firstname: string, lastname: string) => {
	cy.getByTestId('EditableProfileCardHeader.EditBtn').click();
	cy.getByTestId('ProfileCard.FirstnameInput').clear().type(firstname);
	cy.getByTestId('ProfileCard.LastnameInput').clear().type(lastname);
	cy.getByTestId('EditableProfileCardHeader.SaveBtn').click();
};

export const resetProfile = (profileId: string) => {
	cy.request({
		method: 'PUT',
		url: 'http://localhost:8000/profile/' + profileId,
		headers: { Authorization: 'asdas' },
		body: {
			id: '4',
			firstname: 'test',
			lastname: 'test',
			age: 0,
			city: 'Test',
			username: 'test',
			avatar: '',
			currency: 'EUR',
			country: 'Armenia',
		},
	});
};

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			updateProfile(firstname: string, lastname: string): Chainable<void>;
			resetProfile(profileId: string): Chainable<void>;
		}
	}
}
