import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Meta, StoryFn } from '@storybook/react';
import ArticleRating from './ArticleRating';

export default {
	title: 'features/ArticleRating',
	component: ArticleRating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		StoreDecorator({
			user: {
				authData: { id: '1' },
			},
		}),
	],
} as Meta<typeof ArticleRating>;

const Template: StoryFn<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	articleId: '1',
};

Normal.parameters = {
	mockData: [
		{
			url: `${__API__}/article-ratings?userId=1&articleId=1`,
			method: 'GET',
			status: 200,
			response: [
				{
					rate: '4',
				},
			],
		},
	],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
	articleId: '1',
};

WithoutRate.parameters = {
	mockData: [
		{
			url: `${__API__}/article-ratings?userId=1&articleId=1`,
			method: 'GET',
			status: 200,
			response: [],
		},
	],
};
