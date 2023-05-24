import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
	title: 'shared/ListBox',
	component: ListBox,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		(Story) => (
			<div style={{ padding: 200 }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	value: 'CLICK',
	items: [
		{
			content: 'option1',
			value: '1243',
		},
		{
			content: 'option2',
			value: '1243',
		},
		{
			content: 'option3',
			value: '1243',
		},
	],
};

export const topLeft = Template.bind({});
topLeft.args = {
	direction: 'top left',
	value: 'CLICK',
	items: [
		{
			content: 'option1',
			value: '1243',
		},
		{
			content: 'option2',
			value: '1243',
		},
		{
			content: 'option3',
			value: '1243',
		},
	],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
	direction: 'bottom left',
	value: 'CLICK',
	items: [
		{
			content: 'option1',
			value: '1243',
		},
		{
			content: 'option2',
			value: '1243',
		},
		{
			content: 'option3',
			value: '1243',
		},
	],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
	direction: 'bottom right',
	value: 'CLICK',
	items: [
		{
			content: 'option1',
			value: '1243',
		},
		{
			content: 'option2',
			value: '1243',
		},
		{
			content: 'option3',
			value: '1243',
		},
	],
};
