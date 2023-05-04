import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationsButton } from './NotificationsButton';

export default {
    title: 'shared/NotificationsButton',
    component: NotificationsButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationsButton>;

const Template: ComponentStory<typeof NotificationsButton> = (args) => <NotificationsButton { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
