import { StateScheme } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
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
				data,
			},
		};

		expect(getProfileData(state as StateScheme)).toEqual(data);
	});

	test('empty state', () => {
		const state: DeepPartial<StateScheme> = {};

		expect(getProfileData(state as StateScheme)).toEqual(undefined);
	});
});
