import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...(args as object)} />;

export const Primary = Template.bind({});
Primary.args = {
	title: 'Title text',
	text: 'lorem text text text text lorem text text text text lorem text text text text ',
};

export const Error = Template.bind({});
Error.args = {
	theme: TextTheme.ERROR,
	title: 'Title text',
	text: 'lorem text text text text lorem text text text text lorem text text text text ',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
	title: 'Title text',
};
export const onlyText = Template.bind({});
onlyText.args = {
	text: 'lorem text text text text lorem text text text text lorem text text text text ',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	title: 'Title text',
	text: 'lorem text text text text lorem text text text text lorem text text text text ',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
	title: 'Title text',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
	text: 'lorem text text text text lorem text text text text lorem text text text text ',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const sizeM = Template.bind({});
sizeM.args = {
	title: 'Title text',
	text: 'lorem text text text text lorem text text text text lorem text text text text ',
	size: TextSize.M,
};

export const sizeL = Template.bind({});
sizeL.args = {
	title: 'Title text',
	text: 'lorem text text text text lorem text text text text lorem text text text text ',
	size: TextSize.L,
};

export const sizeS = Template.bind({});
sizeS.args = {
	title: 'Title text',
	text: 'lorem text text text text lorem text text text text lorem text text text text ',
	size: TextSize.L,
};
