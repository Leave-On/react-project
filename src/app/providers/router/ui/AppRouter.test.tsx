import { UserRole } from '@/entities/User';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';

describe('app/router/AppRouter', () => {
	test('page to be rendered', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAbout(),
		});

		const page = await screen.findByTestId('AboutPage');
		expect(page).toBeInTheDocument();
	});
	test('page not found', async () => {
		componentRender(<AppRouter />, {
			route: '/asdad',
		});

		const page = await screen.findByTestId('NotFoundPage');
		expect(page).toBeInTheDocument();
	});
	test('redirect unauth user to mainPage', async () => {
		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
		});

		const page = await screen.findByTestId('MainPage');
		expect(page).toBeInTheDocument();
	});
	test('access to privite page for auth user', async () => {
		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
			initialState: {
				user: { _inited: true, authData: {} },
			},
		});

		const page = await screen.findByTestId('ProfilePage');
		expect(page).toBeInTheDocument();
	});
	test('access denied', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdmin(),
			initialState: {
				user: { _inited: true, authData: {} },
			},
		});

		const page = await screen.findByTestId('ForbiddenPage');
		expect(page).toBeInTheDocument();
	});
	test('access granted', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdmin(),
			initialState: {
				user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
			},
		});

		const page = await screen.findByTestId('AdminPanelPage');
		expect(page).toBeInTheDocument();
	});
});
