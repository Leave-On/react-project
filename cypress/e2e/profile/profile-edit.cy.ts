let profileId = '';
describe('User visiting profile page', () => {
	beforeEach(() => {
		cy.visit('');
		cy.login().then((data) => {
			profileId = data.id;
			cy.visit(`profile/${data.id}`);
		});
	});
	afterEach(() => {
		cy.resetProfile(profileId);
	});
	it('and profile loaded successfully', () => {
		cy.getByTestId('ProfileCard.FirstnameInput').should('have.value', 'test');
	});
	it('and editing', () => {
		const newName = 'new test';
		const newLastname = 'new lastname test';
		cy.updateProfile(newName, newLastname);
		cy.getByTestId('ProfileCard.FirstnameInput').should('have.value', newName);
		cy.getByTestId('ProfileCard.LastnameInput').should('have.value', newLastname);
	});
});
