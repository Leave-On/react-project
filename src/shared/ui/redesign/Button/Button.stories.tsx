import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Text',
	disabled: true,
};
