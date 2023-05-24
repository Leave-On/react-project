import { Meta, StoryFn } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';

export default {
	title: 'entities/CurrencySelect',
	component: CurrencySelect,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof CurrencySelect>;

const Template: StoryFn<typeof CurrencySelect> = (args) => <CurrencySelect {...(args as object)} />;

export const Primary = Template.bind({});
Primary.args = {};
