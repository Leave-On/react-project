import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Meta, StoryFn } from '@storybook/react';
import { NotificationsList } from './NotificationsList';

export default {
    title: 'entities/Notification/NotificationsList',
    component: NotificationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({})
    ]
} as Meta<typeof NotificationsList>;

const Template: StoryFn<typeof NotificationsList> = (args) => <NotificationsList { ...args } />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Title',
                    description: 'You got this notification'

                },
                {
                    id: '2',
                    title: 'Title 2',
                    description: 'You got this notification'

                },
                {
                    id: '3',
                    title: 'Title 3',
                    description: 'You got this notification'

                }
            ],
        },
    ],
}
