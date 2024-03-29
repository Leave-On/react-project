import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	comment: {
		id: '1',
		text: 'comment',
		user: { id: '1', username: 'Clone' },
	},
};

export const CommentCardIsLoading = Template.bind({});
CommentCardIsLoading.args = {
	comment: {
		id: '1',
		text: 'comment',
		user: { id: '1', username: 'Clone' },
	},
	isLoading: true,
};
