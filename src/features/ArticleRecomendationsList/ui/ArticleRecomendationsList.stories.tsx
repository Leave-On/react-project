import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Meta, StoryFn } from '@storybook/react';
import { ArticleRecomendationsList } from './ArticleRecomendationsList';

export default {
	title: 'features/ArticleRecomendationsList',
	component: ArticleRecomendationsList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ArticleRecomendationsList>;

const Template: StoryFn<typeof ArticleRecomendationsList> = (args) => (
	<ArticleRecomendationsList {...args} />
);

const article: Article = {
	id: '1',
	title: '123',
	user: { id: '1', username: 'user' },
	img: '',
	views: 123,
	createdAt: '',
	type: [],
	blocks: [],
	subtitle: '',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
	mockData: [
		{
			url: `${__API__}/articles?_limit=3`,
			method: 'GET',
			status: 200,
			response: [
				{ ...article, id: '1' },
				{ ...article, id: '2' },
				{ ...article, id: '3' },
			],
		},
	],
};
