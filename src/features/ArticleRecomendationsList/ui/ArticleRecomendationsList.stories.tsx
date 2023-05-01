import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleRecomendationsList } from './ArticleRecomendationsList';

export default {
    title: 'shared/ArticleRecomendationsList',
    component: ArticleRecomendationsList,
    argTypes: {
       backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecomendationsList>;

const Template: ComponentStory<typeof ArticleRecomendationsList> = (args) => <ArticleRecomendationsList { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
