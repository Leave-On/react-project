import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal }  from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args as object} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis nulla ut dolores eligendi. Dicta culpa nam placeat voluptates ullam perferendis nostrum, voluptatum asperiores impedit quae alias inventore est eos!'
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis nulla ut dolores eligendi. Dicta culpa nam placeat voluptates ullam perferendis nostrum, voluptatum asperiores impedit quae alias inventore est eos!'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
