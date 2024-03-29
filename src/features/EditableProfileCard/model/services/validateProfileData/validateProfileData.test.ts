import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
	firstname: 'Yuri',
	lastname: 'Tarded',
	age: 100,
	country: Country.Belarus,
	currency: Currency.USD,
	city: 'Meinhem',
	username: 'PussySlayer228',
};

describe('validateProfileData.test', () => {
	test('success', async () => {
		const result = validateProfileData(data);
		expect(result).toEqual([]);
	});

	test('no first or lastname', async () => {
		const result = validateProfileData({ ...data, firstname: '', lastname: '' });
		expect(result).toEqual([ValidateProfileError.INCORRECT_DATA]);
	});
	test('incorrect age', async () => {
		const result = validateProfileData({ ...data, age: undefined });
		expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
	});

	test('incorrect country', async () => {
		const result = validateProfileData({ ...data, country: undefined });
		expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
	});

	test('incorrect all', async () => {
		const result = validateProfileData({});
		expect(result).toEqual([
			ValidateProfileError.INCORRECT_DATA,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
		]);
	});
});
