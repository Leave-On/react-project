import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({})
    ]
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
    item: {
        id: '1',
        title: 'Title',
        description: 'You got this notification'

    }
};
