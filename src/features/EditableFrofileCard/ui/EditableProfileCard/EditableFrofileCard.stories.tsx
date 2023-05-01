import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditableFrofileCard } from './EditableFrofileCard';

export default {
    title: 'shared/EditableFrofileCard',
    component: EditableFrofileCard,
    argTypes: {
       backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableFrofileCard>;

const Template: ComponentStory<typeof EditableFrofileCard> = (args) => <EditableFrofileCard { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
