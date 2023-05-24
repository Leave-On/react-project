import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
	title: 'shared/Flex',
	component: Flex,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
	children: (
		<>
			<div>text</div>
			<div>text</div>
			<div>text</div>
			<div>text</div>
		</>
	),
};

export const rowGap4 = Template.bind({});
rowGap4.args = {
	gap: '4',
	children: (
		<>
			<div>text 1</div>
			<div>text 2</div>
			<div>text 3</div>
			<div>text 4</div>
		</>
	),
};

export const rowGap8 = Template.bind({});
rowGap8.args = {
	gap: '8',
	children: (
		<>
			<div>text 1</div>
			<div>text 2</div>
			<div>text 3</div>
			<div>text 4</div>
		</>
	),
};

export const rowGap16 = Template.bind({});
rowGap16.args = {
	gap: '16',
	children: (
		<>
			<div>text 1</div>
			<div>text 2</div>
			<div>text 3</div>
			<div>text 4</div>
		</>
	),
};

export const rowGap32 = Template.bind({});
rowGap32.args = {
	gap: '32',
	children: (
		<>
			<div>text 1</div>
			<div>text 2</div>
			<div>text 3</div>
			<div>text 4</div>
		</>
	),
};

export const Column = Template.bind({});
Column.args = {
	direction: 'column',
	children: (
		<>
			<div>text 1</div>
			<div>text 2</div>
			<div>text 3</div>
			<div>text 4</div>
		</>
	),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
	direction: 'column',
	align: 'end',
	children: (
		<>
			<div>text 1</div>
			<div>text 2</div>
			<div>text 3</div>
			<div>text 4</div>
		</>
	),
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
	direction: 'column',
	gap: '4',
	children: (
		<>
			<div>text 1</div>
			<div>text 2</div>
			<div>text 3</div>
			<div>text 4</div>
		</>
	),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
	direction: 'column',
	gap: '16',
	children: (
		<>
			<div>text 1</div>
			<div>text 2</div>
			<div>text 3</div>
			<div>text 4</div>
		</>
	),
};
