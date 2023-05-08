import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
    title: 'Rate this!',
    afterRatingText: "Good job",
    hasFeedback: true,
    feedbackTitle: 'Leave feedback!',
};
