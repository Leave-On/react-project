import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlePageFilters } from './ArticlePageFilters';

export default {
	title: 'pages/ArticlePageFilters',
	component: ArticlePageFilters,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => (
	<ArticlePageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
