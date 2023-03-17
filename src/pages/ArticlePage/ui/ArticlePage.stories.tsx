import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article, ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import  ArticlePage  from './ArticlePage';

export default {
    title: 'shared/ArticlePage',
    component: ArticlePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePage>;



const Template: ComponentStory<typeof ArticlePage> = (args) => <ArticlePage { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
