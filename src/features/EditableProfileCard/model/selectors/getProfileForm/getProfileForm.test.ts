import { StateScheme } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
	test('getdata', () => {
		const data = {
			firstname: 'Yuri',
			lastname: 'Tarded',
			age: 100,
			country: Country.Belarus,
			currency: Currency.USD,
			city: 'Meinhem',
			username: 'PussySlayer228',
		};

		const state: DeepPartial<StateScheme> = {
			profile: {
				form: data,
			},
		};

		expect(getProfileForm(state as StateScheme)).toEqual(data);
	});

	test('empty state', () => {
		const state: DeepPartial<StateScheme> = {};

		expect(getProfileForm(state as StateScheme)).toEqual(undefined);
	});
});
