import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	comments: [
		{
			id: '1',
			text: 'comment',
			user: { id: '1', username: 'Clone' },
		},
		{
			id: '2',
			text: 'Video',
			user: { id: '2', username: 'Vendetta' },
		},
	],
};

export const CommentListIsLoading = Template.bind({});
CommentListIsLoading.args = {
	comments: [],
	isLoading: true,
};
