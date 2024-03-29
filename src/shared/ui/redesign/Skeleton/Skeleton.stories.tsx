import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	width: '100%',
	height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
	border: '50%',
	width: 100,
	height: 100,
};

export const Dark = Template.bind({});
Dark.args = {
	width: '100%',
	height: 200,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const darkCircle = Template.bind({});
darkCircle.args = {
	border: '50%',
	width: 100,
	height: 100,
};
darkCircle.decorators = [ThemeDecorator(Theme.DARK)];
