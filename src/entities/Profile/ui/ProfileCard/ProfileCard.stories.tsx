import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from '../../../../shared/assets/tests/storybookAvatar.png';
import { ProfileCard } from './ProfileCard';

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
	<ProfileCard {...(args as object)} />
);

export const Primary = Template.bind({});
Primary.args = {
	data: {
		firstname: 'Yuri',
		lastname: 'Tarded',
		age: 100,
		country: Country.Belarus,
		currency: Currency.USD,
		avatar: AvatarImg,
		city: 'Meinhem',
		username: 'PussySlayer228',
	},
};

export const withError = Template.bind({});
withError.args = {
	error: 'true',
};

export const isLoading = Template.bind({});
isLoading.args = {
	isLoading: true,
};
